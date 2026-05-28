// 从第 37 章提取
// 代码清单: 图片优化组件
// 文件名: chapter37_middleware.ts
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 处理请求
  const response = NextResponse.next();

  // 可以修改响应
  response.headers.set('x-custom-header', 'value');

  return response;
}

export const config = {
  matcher: [
    // 匹配路径
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
