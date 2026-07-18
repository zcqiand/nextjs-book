// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 假设你有 50% 的用户开启新功能
const NEW_FEATURE_PERCENTAGE = 0.5;

function isInExperiment(userId: string, experimentName: string): boolean {
  // 基于用户 ID 的确定性分配
  const hash = hashString(`${userId}:${experimentName}`);
  return (hash % 100) / 100 < NEW_FEATURE_PERCENTAGE;
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function middleware(request: NextRequest) {
  const userId = request.cookies.get('user-id')?.value || 'anonymous';
  const pathname = request.nextUrl.pathname;

  // 只对特定路由进行实验
  if (pathname === '/') {
    const isNewHomepage = isInExperiment(userId, 'new-homepage-v2');

    const response = NextResponse.next();
    response.cookies.set('new-homepage-v2', String(isNewHomepage), {
      maxAge: 60 * 60 * 24 * 7, // 7 天
    });

    if (isNewHomepage) {
      // 重写到新首页
      return NextResponse.rewrite(
        new URL('/new-homepage', request.url)
      );
    }
  }

  return NextResponse.next();
}