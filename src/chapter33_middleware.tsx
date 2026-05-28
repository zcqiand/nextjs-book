// 从第 33 章提取
// 代码清单: 边缘认证
// 文件名: chapter33_middleware.tsx
// 边缘认证
export const runtime = 'edge';

export async function middleware(request: Request) {
  const token = request.headers.get('authorization');

  if (!token) {
    return new Response('Unauthorized', { status: 401 });
  }

  // 验证 token（使用 Edge 兼容的库）
  const user = await verifyToken(token);

  if (!user) {
    return new Response('Invalid token', { status: 401 });
  }

  // 在请求中传递用户信息
  const headers = new Headers(request.headers);
  headers.set('x-user-id', user.id);

  return NextResponse.next({ request: { headers } });
}
