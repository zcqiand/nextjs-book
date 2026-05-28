// 从第 37 章提取
// 代码清单: middleware 函数
// 文件名: chapter37_middleware.js
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60; // 1 分钟
const RATE_LIMIT_MAX = 100; // 最大请求数

export function middleware(request: NextRequest) {
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();

  const record = rateLimitMap.get(ip);
  const windowStart = now - RATE_LIMIT_WINDOW * 1000;

  if (record && record.timestamp > windowStart) {
    record.count++;
    if (record.count > RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 }
      );
    }
  } else {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
  }

  return NextResponse.next();
}
