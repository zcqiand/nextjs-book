// 从第 9 章提取
// 代码清单: middleware.ts
// 文件名: chapter09_middleware.ts
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 在这里检查请求并做出响应
  return NextResponse.next();
}
