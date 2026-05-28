// 从第 9 章提取
// 代码清单: middleware 函数
// 文件名: chapter09_middleware_4.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 只在这里添加认证逻辑
  return NextResponse.next();
}

export const config = {
  matcher: [
    // 匹配所有以 /dashboard 开头的路径
    '/dashboard/:path*',
    // 匹配所有以 /api 开头的路径
    '/api/:path*',
    // 排除登录页面
    '/((?!login|register).*)',
  ],
};
