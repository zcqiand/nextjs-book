// 从第 7 章提取
// 代码清单: API 路由 POST 处理器
// 文件名: chapter07_POST.tsx
// app/api/posts/route.ts
export async function POST(request: Request) {
  const body = await request.json();

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: body.authorId,
    },
  });

  return Response.json(post);
}
