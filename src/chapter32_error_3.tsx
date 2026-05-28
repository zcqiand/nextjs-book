// 从第 32 章提取
// 代码清单: src/lib/error-logger.ts
// 文件名: chapter32_error_3.tsx
// src/lib/error-logger.ts
interface ErrorLog {
  message: string;
  stack?: string;
  timestamp: number;
  userId?: string;
  url: string;
  userAgent: string;
}

export async function logError(error: Error, context?: Record<string, any>) {
  const errorLog: ErrorLog = {
    message: error.message,
    stack: error.stack,
    timestamp: Date.now(),
    url: typeof window !== 'undefined' ? window.location.href : '',
    userAgent:
      typeof navigator !== 'undefined' ? navigator.userAgent : '',
    ...context,
  };

  console.error('Error logged:', errorLog);

  // 发送到错误收集服务
  if (typeof window !== 'undefined') {
    await fetch('/api/errors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(errorLog),
    }).catch(console.error);
  }
}
