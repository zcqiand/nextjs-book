// lib/auth.ts
import { SignJWT, jwtVerify } from 'jose';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key'
);

export async function createToken(payload: {
  userId: string;
  role: string;
}): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .setIssuedAt()
    .sign(secret);
}

export async function verifyToken(token: string): Promise<{
  userId: string;
  role: string;
} | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as { userId: string; role: string };
  } catch {
    return null;
  }
}