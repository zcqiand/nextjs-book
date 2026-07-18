// app/api/posts/route.ts - GET /api/posts, POST /api/posts
export async function GET(request: Request) {
  const posts = await db.post.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return Response.json(posts);
}

export async function POST(request: Request) {
  const data = await request.json();
  const post = await db.post.create({ data });
  return Response.json(post, { status: 201 });
}

// app/api/posts/[id]/route.ts - GET /api/posts/:id, PUT, DELETE
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const post = await db.post.findUnique({ where: { id } });
  if (!post) {
    return Response.json({ error: 'Not found' }, { status: 404 });
  }
  return Response.json(post);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await request.json();
  const post = await db.post.update({ where: { id }, data });
  return Response.json(post);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await db.post.delete({ where: { id } });
  return new Response(null, { status: 204 });
}