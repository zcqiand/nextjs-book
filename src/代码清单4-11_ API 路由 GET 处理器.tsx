// app/api/posts/route.ts
// 每个 HTTP 方法对应一个导出的函数
export async function GET() {
  const posts = await getPosts();
  return Response.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const post = await createPost(body);
  return Response.json(post, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await deletePost(id);
  return new Response(null, { status: 204 });
}