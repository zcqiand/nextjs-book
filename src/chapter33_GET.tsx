// 从第 33 章提取
// 代码清单: API 路由 GET 处理器
// 文件名: chapter33_GET.tsx
// app/api/edge/route.ts
export const runtime = 'edge';

export async function GET(request: Request) {
  // Edge Runtime 的代码
  const url = new URL(request.url);

  return Response.json({
    message: 'Hello from Edge!',
    location: request.headers.get('x-vercel-ip-country') || 'unknown',
  });
}
