// 从第 37 章提取
// 代码清单: 简化版本：基于 cookie 读取实验组
// 文件名: chapter37_middleware_4.ts
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
