import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // nextUrl 是解析好的 URL 对象，不必再手工 new URL(request.url)
  const pathname = request.nextUrl.pathname;
  // cookies 提供按名读取，省去自己拆 cookie 请求头
  const session = request.cookies.get('session')?.value;
  // headers 是 Web 标准 Headers 对象，取不到时返回 null
  const userAgent = request.headers.get('user-agent');

  console.log(`路径=${pathname} 会话=${session ?? '无'} UA=${userAgent ?? '未知'}`);
  return NextResponse.next();
}