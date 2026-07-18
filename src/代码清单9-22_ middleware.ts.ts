// middleware.ts
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // 服务端变量在中间件中可用
  const jwtSecret = process.env.JWT_SECRET;
  const apiBaseUrl = process.env.API_BASE_URL;

  // NEXT_PUBLIC_ 变量也可以访问，但要注意它们会被暴露
  const appName = process.env.NEXT_PUBLIC_APP_NAME;

  // 验证逻辑...
}