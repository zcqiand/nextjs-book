export class AuthError extends Error {
  readonly status: number;
  constructor(status: number, message: string) {
    super(message);
    this.name = "AuthError";
    this.status = status;
  }
}

export async function getCurrentUser(): Promise<SessionUser | null> {
  return getSessionUser(await readSessionCookie());
}

export async function requirePermission(code: string): Promise<SessionUser> {
  const user = await getCurrentUser();
  if (!user) {
    throw new AuthError(401, "未登录");
  }
  if (!can(user.permissions, code)) {
    throw new AuthError(403, "无权限");
  }
  return user;
}