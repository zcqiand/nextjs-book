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