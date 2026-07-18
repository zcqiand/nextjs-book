import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const startTime = Date.now();
  const pathname = request.nextUrl.pathname;
  const method = request.method;
  const ip = request.ip || 'unknown';

  // 记录请求
  console.log(`[${new Date().toISOString()}] ${method} ${pathname} - ${ip}`);

  // 继续处理请求...
  const response = NextResponse.next();

  // 记录响应时间和状态码
  const duration = Date.now() - startTime;
  console.log(`[${new Date().toISOString()}] Completed in ${duration}ms - ${response.status}`);

  // 添加自定义头用于后续分析
  response.headers.set('x-response-time', String(duration));

  return response;
}