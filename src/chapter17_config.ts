// 从第 17 章提取
// 代码清单: 图片优化组件
// 文件名: chapter17_config.ts
// src/middleware.ts
import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAuthPage = req.nextUrl.pathname === '/login' ||
                     req.nextUrl.pathname === '/register';
  const isAdminPage = req.nextUrl.pathname.startsWith('/admin');

  // 已登录用户访问登录/注册页，重定向到首页
  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // 未登录用户访问需要认证的页面，重定向到登录页
  if (!isLoggedIn && !isAuthPage) {
    const callbackUrl = encodeURIComponent(req.url);
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${callbackUrl}`, req.url)
    );
  }

  // 管理员页面权限检查
  if (isAdminPage && req.auth?.user?.role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/', req.url));
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
