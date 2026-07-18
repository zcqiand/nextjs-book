// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 公开路径：不需要认证
  const publicPaths = ['/login', '/register', '/forgot-password'];
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // 检查认证状态
  const authToken = request.cookies.get('auth-token')?.value;

  if (!authToken) {
    // 未登录，重定向到登录页
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 验证 token（这里简化了，实际应该调用验证服务）
  const isValidToken = await validateToken(authToken);

  if (!isValidToken) {
    // token 无效，清除并重定向
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('auth-token');
    return response;
  }

  // 认证通过，允许访问
  return NextResponse.next();
}

async function validateToken(token: string): Promise<boolean> {
  // 实际应用中，这里应该调用验证服务或 JWT 验证库
  return token === 'valid-token-123';
}