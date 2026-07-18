// app/api/data/route.ts
export async function GET(request: Request) {
  const data = await fetchFromDatabase();

  return Response.json(data, {
    headers: {
      // 公共资源，可缓存
      'Cache-Control': 'public, max-age=60, s-maxage=3600',
    },
  });
}

// 对于用户特定数据
export async function GET_USER_DATA(request: Request) {
  return Response.json(userData, {
    headers: {
      // 私有资源，不可共享缓存
      'Cache-Control': 'private, max-age=3600',
    },
  });
}