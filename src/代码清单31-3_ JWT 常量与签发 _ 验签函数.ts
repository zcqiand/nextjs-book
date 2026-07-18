const ALG = "HS256";
const ISSUER = "lab-management-system-nextjs";
const MAX_AGE_SECONDS = 60 * 60 * 8; // 8h

export interface SessionPayload {
  sub: string; // userId
  roleId: string;
  exp?: number; // 仅测试/强制过期用
}

export function signSessionToken(payload: SessionPayload): Promise<string> {
  const { exp, ...rest } = payload;
  const jwtPayload: JWTPayload = { ...rest };
  const builder = new SignJWT(jwtPayload)
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setIssuer(ISSUER);
  if (exp) {
    builder.setExpirationTime(exp);
  } else {
    builder.setExpirationTime(`${MAX_AGE_SECONDS}s`);
  }
  return builder.sign(secret());
}

export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret(), { issuer: ISSUER });
    if (typeof payload.sub !== "string" || typeof payload.roleId !== "string") return null;
    return { sub: payload.sub, roleId: payload.roleId };
  } catch {
    return null;
  }
}