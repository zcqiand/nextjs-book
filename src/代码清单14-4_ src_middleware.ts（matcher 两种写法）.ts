import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  // 写法一（负向排除）：负向前瞻 (?!...) 表示请求路径不能命中列出的前缀，
  // 即跳过 Next.js 内部静态资源与常见图片文件，其余全部经过中间件
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

// 写法二（正向圈定）：只让 /dashboard 及其子路径经过中间件，
// :path* 匹配零个或多个路径段，所以 /dashboard 本身也会命中
// export const config = {
//   matcher: ['/dashboard/:path*'],
// };