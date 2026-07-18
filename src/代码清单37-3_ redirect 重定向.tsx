// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'secret'
);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;

  const isAuthPage = request.nextUrl.pathname.startsWith('/login');
  const isProtectedRoute = request.nextUrl.pathname.startsWith('/dashboard');

  // 公开路由
  if (isAuthPage) {
    if (token) {
      // 已登录用户访问登录页，重定向
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    return NextResponse.next();
  }

  // 保护路由
  if (isProtectedRoute) {
    if (!token) {
      // 未登录，重定向到登录页
      return NextResponse.redirect(
        new URL(`/login?callbackUrl=${encodeURIComponent(request.url)}`, request.url)
      );
    }

    try {
      // 验证 token
      const { payload } = await jwtVerify(token, JWT_SECRET);

      // 检查管理员权限
      if (request.nextUrl.pathname.startsWith('/admin') && payload.role !== 'admin') {
        return NextResponse.redirect(new URL('/', request.url));
      }
    } catch {
      // Token 无效，重定向到登录
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}