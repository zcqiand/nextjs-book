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