// 简化版本：基于 cookie 读取实验组
export function middleware(request: NextRequest) {
  const experiment = request.cookies.get('experiment')?.value;
  const response = NextResponse.next();

  if (!experiment) {
    // 首次访问，随机分配
    const isTest = Math.random() < 0.5;
    response.cookies.set('experiment', isTest ? 'test' : 'control', {
      maxAge: 60 * 60 * 24 * 30, // 30 天
    });
  }

  return response;
}