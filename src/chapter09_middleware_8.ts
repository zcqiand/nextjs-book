// 从第 9 章提取
// 代码清单: redirect 重定向
// 文件名: chapter09_middleware_8.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 功能开关配置
const featureFlags = {
  newDashboard: process.env.NEXT_PUBLIC_FLAG_NEW_DASHBOARD === 'true',
  aiAssistant: process.env.NEXT_PUBLIC_FLAG_AI_ASSISTANT === 'true',
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 如果访问新版仪表板但功能未开启，重定向到旧版
  if (pathname.startsWith('/new-dashboard') && !featureFlags.newDashboard) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // 将功能开关信息传递给应用
  const response = NextResponse.next();
  response.headers.set('x-ff-new-dashboard', String(featureFlags.newDashboard));
  response.headers.set('x-ff-ai-assistant', String(featureFlags.aiAssistant));

  return response;
}

export const config = {
  matcher: ['/new-dashboard/:path*', '/dashboard/:path*'],
};
