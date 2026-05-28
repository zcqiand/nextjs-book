// 从第 7 章提取
// 代码清单: middleware.ts
// 文件名: chapter07_middleware.js
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 检查 API 请求的认证状态
  const token = request.cookies.get('auth-token');

  if (!token && request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
