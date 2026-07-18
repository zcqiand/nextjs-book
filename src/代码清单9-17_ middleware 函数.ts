import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 只对首页进行 A/B 测试
  if (pathname !== '/') {
    return NextResponse.next();
  }

  // 检查用户是否已经被分配到某个组
  let abGroup = request.cookies.get('ab-group')?.value;

  if (!abGroup) {
    // 随机分配：50% A组，50% B组
    abGroup = Math.random() < 0.5 ? 'A' : 'B';

    const response = NextResponse.next();
    response.cookies.set('ab-group', abGroup, {
      maxAge: 60 * 60 * 24 * 30, // 30 天
      path: '/',
    });

    return response;
  }

  // 将分组信息传递给应用
  return NextResponse.next({
    request: {
      headers: new Headers(request.headers).set('x-ab-group', abGroup),
    },
  });
}