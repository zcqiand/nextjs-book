// 从第 9 章提取
// 代码清单: middleware 函数
// 文件名: chapter09_middleware_2.js
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 简单的内存存储（生产环境应该用 Redis）
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export function middleware(request: NextRequest) {
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();

  // 检查 IP 的请求计数
  const record = requestCounts.get(ip);

  if (record) {
    // 检查是否需要重置计数器
    if (now > record.resetTime) {
      requestCounts.set(ip, { count: 1, resetTime: now + 60000 });
    } else if (record.count > 100) {
      // 每分钟超过 100 次请求则拒绝
      return NextResponse.json(
        { error: 'Too Many Requests' },
        { status: 429 }
      );
    } else {
      record.count++;
    }
  } else {
    requestCounts.set(ip, { count: 1, resetTime: now + 60000 });
  }

  return NextResponse.next();
}
