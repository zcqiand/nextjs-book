// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJWT } from '@/lib/jwt';

// 需要认证的路径
const protectedPaths = ['/dashboard', '/profile', '/settings', '/admin'];

// 公开路径（不需要认证）
const publicPaths = ['/', '/login', '/register'];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 检查路径是否需要认证
  const needsAuth = protectedPaths.some(path => pathname.startsWith(path));
  const isPublic = publicPaths.some(path => pathname === path);

  if (!needsAuth && !isPublic) {
    // 既不是受保护路径也不是公开路径，放行
    return NextResponse.next();
  }

  // 获取 token
  const token = request.cookies.get('auth-token')?.value;

  if (needsAuth && !token) {
    // 需要认证但没有 token，重定向到登录页
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isPublic && token) {
    // 公开路径但已登录，重定向到 dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (token) {
    // 验证 token
    const payload = await verifyJWT(token);

    if (payload) {
      // Token 有效，将用户信息传递给后续处理
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-user-id', payload.userId);
      requestHeaders.set('x-user-email', payload.email);
      requestHeaders.set('x-user-role', payload.role);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    }

    // Token 无效，清除并重定向到登录页
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('auth-token');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * 匹配所有路径，排除：
     * - _next/static（静态文件）
     * - _next/image（图片优化）
     * - favicon.ico（网站图标）
     * - public 文件夹中的文件
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};