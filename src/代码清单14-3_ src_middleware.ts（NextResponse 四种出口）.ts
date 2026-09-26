import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 出口一 next：放行，请求继续走原本匹配的路由
  if (pathname === '/') {
    return NextResponse.next();
  }

  // 出口二 rewrite：地址栏仍是 /home，但内容由 /boards 渲染，用户察觉不到
  if (pathname === '/home') {
    return NextResponse.rewrite(new URL('/boards', request.url));
  }

  // 出口三 redirect：地址栏真的变成 /login，状态码 307（临时重定向）
  if (pathname === '/dashboard') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 出口四 短路响应：请求不再进入任何页面或路由处理器，直接回 JSON
  if (pathname.startsWith('/api/legacy')) {
    return NextResponse.json({ error: '该接口已下线' }, { status: 410 });
  }

  return NextResponse.next();
}