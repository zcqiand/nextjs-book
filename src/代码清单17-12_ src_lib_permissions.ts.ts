// src/lib/permissions.ts
type Role = 'USER' | 'ADMIN';

type Permission = 'read:posts' | 'write:posts' | 'delete:posts' |
                  'read:users' | 'write:users' | 'delete:users';

const rolePermissions: Record<Role, Permission[]> = {
  USER: ['read:posts', 'write:posts'],
  ADMIN: [
    'read:posts', 'write:posts', 'delete:posts',
    'read:users', 'write:users', 'delete:users',
  ],
};

export function hasPermission(role: Role, permission: Permission): boolean {
  return rolePermissions[role]?.includes(permission) ?? false;
}

export function canDeletePost(role: Role): boolean {
  return hasPermission(role, 'delete:posts');
}

export function canManageUsers(role: Role): boolean {
  return hasPermission(role, 'write:users');
}