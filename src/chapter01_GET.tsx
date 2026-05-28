// 从第 1 章提取
// 代码清单: API 路由 GET 处理器
// 文件名: chapter01_GET.tsx
// app/api/posts/route.ts
export async function GET() {
  const posts = await getPosts();
  return Response.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const post = await createPost(body);
  return Response.json(post);
}
