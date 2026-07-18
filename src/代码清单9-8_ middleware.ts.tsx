// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

type Role = 'user' | 'admin' | 'moderator';

// 受保护的路径及其允许的角色
const protectedPaths: Record<string, Role[]> = {
  '/admin': ['admin'],
  '/dashboard/settings': ['admin', 'moderator'],
  '/profile': ['user', 'admin', 'moderator'],
};

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 检查是否是需要权限保护的路径
  for (const [path, allowedRoles] of Object.entries(protectedPaths)) {
    if (pathname.startsWith(path)) {
      // 获取用户角色（实际应用中可能从 JWT 或会话中读取）
      const userRole = request.cookies.get('user-role')?.value as Role | undefined;

      if (!userRole || !allowedRoles.includes(userRole)) {
        // 权限不足，返回 403
        return NextResponse.json(
          { error: 'Forbidden: You do not have permission to access this resource' },
          { status: 403 }
        );
      }
    }
  }

  return NextResponse.next();
}