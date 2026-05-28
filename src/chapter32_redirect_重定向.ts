// 从第 32 章提取
// 代码清单: redirect 重定向
// 文件名: chapter32_redirect_重定向.ts
// middleware.ts
import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const pathname = req.nextUrl.pathname;

  // 调试：日志记录
  console.log('Middleware check:', {
    pathname,
    isLoggedIn,
    auth: req.auth ? 'present' : 'missing',
  });

  if (!isLoggedIn && pathname.startsWith('/dashboard')) {
    console.log('Unauthorized access attempt to:', pathname);
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
});
