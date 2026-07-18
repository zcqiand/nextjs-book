export async function getSessionUser(
  token: string | null | undefined,
): Promise<SessionUser | null> {
  if (!token) return null;
  const payload = await verifySessionToken(token);
  if (!payload) return null;

  const user = db.select().from(users).where(eq(users.id, payload.sub)).get();
  if (!user || user.status !== "active") return null;

  const role = db.select().from(roles).where(eq(roles.id, user.roleId)).get();
  if (!role) return null;

  return {
    id: user.id,
    username: user.username,
    displayName: user.displayName,
    roleId: user.roleId,
    permissions: parsePermissions(role.permissions),
  };
}