// 从第 9 章提取
// 代码清单: redirect 重定向
// 文件名: chapter09_middleware_2.tsx
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 公开路径不需要认证
  if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
    return NextResponse.next();
  }

  // 获取 token
  const token = request.cookies.get('auth-token')?.value;

  if (!token) {
    return redirectToLogin(request);
  }

  // 验证 token
  const payload = await verifyToken(token);

  if (!payload) {
    // token 无效或已过期
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('auth-token');
    return response;
  }

  // 将用户信息添加到请求头，供后续处理程序使用
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-user-id', payload.userId);
  requestHeaders.set('x-user-role', payload.role);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

function redirectToLogin(request: NextRequest) {
  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}
