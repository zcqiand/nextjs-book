export const PERMISSIONS = [
  "project:read", "project:write",
  "sample:read", "sample:write",
  "report:read", "report:write", "report:issue",
  "user:read", "user:create", "user:update", "user:delete",
  "role:read", "role:write",
] as const;

export type PermissionCode = (typeof PERMISSIONS)[number];

export function can(perms: readonly string[], code: string): boolean {
  return perms.includes(code);
}