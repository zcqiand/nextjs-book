// 从第 9 章提取
// 代码清单: middleware 函数
// 文件名: chapter09_middleware_6.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 创建一个可修改的响应
  const response = NextResponse.next();

  // 添加自定义响应头
  response.headers.set('x-custom-header', 'Hello from Middleware');
  response.headers.set('x-request-id', crypto.randomUUID());

  // 添加安全相关的头
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );

  return response;
}
