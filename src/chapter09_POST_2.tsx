// 从第 9 章提取
// 代码清单: API 路由 POST 处理器
// 文件名: chapter09_POST_2.tsx
// app/api/auth/logout/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });

  // 清除 auth-token Cookie
  response.cookies.delete('auth-token');

  return response;
}
