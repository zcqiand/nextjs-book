import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // 允许请求继续
  return NextResponse.next();

  // 重定向到其他页面
  return NextResponse.redirect(new URL('/login', request.url));

  // 重定向到外部 URL
  return NextResponse.redirect('https://example.com');

  // 返回 404
  return NextResponse.json({ error: 'Not Found' }, { status: 404 });

  // 返回 401 未授权
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}