// 从第 32 章提取
// 代码清单: API 路由 POST 处理器
// 文件名: chapter32_POST.tsx
// src/app/api/errors/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const errorLog = await request.json();

  // 记录到控制台（生产环境应发送到日志服务）
  console.error('[Error Log]', JSON.stringify(errorLog, null, 2));

  // 可以发送到 Sentry
  // await Sentry.captureException(new Error(errorLog.message), {
  //   extra: errorLog,
  // });

  return NextResponse.json({ received: true });
}
