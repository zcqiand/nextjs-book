// 缓存 GraphQL 响应
export async function getPostsCached(limit: number = 10) {
  const cacheKey = `posts-${limit}`;

  const cached = await fetch(cacheKey, {
    next: { tags: ['posts'], revalidate: 60 },
  });

  if (cached.ok) {
    const data = await cached.json();
    return data.posts;
  }

  const data = await getPosts(limit);

  // 手动缓存到 KV 存储
  await fetch(cacheKey, {
    method: 'PUT',
    body: JSON.stringify(data),
  });

  return data.posts;
}