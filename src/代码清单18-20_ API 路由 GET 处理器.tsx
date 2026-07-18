// app/api/posts/route.ts
export async function GET(request: Request) {
  const cachedData = await fetch('https://api.example.com/posts', {
    next: { revalidate: 60 }, // 60 秒缓存
  });

  return Response.json(await cachedData.json());
}