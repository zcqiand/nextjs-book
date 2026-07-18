import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // request: NextRequest 对象，包含请求的所有信息
  // - request.url: 请求的 URL
  // - request.headers: 请求头
  // - request.cookies: 请求的 cookies
  // - request.nextUrl: 解析后的 URL 对象

  // 返回 NextResponse，控制请求的下一步
  return NextResponse.next();
}