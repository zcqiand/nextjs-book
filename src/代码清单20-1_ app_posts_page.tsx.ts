// app/posts/page.tsx
import { db } from '@/lib/db';
import { cache } from 'react';

export default async function PostsPage() {
  // 直接查询，无需 API 路由
  const posts = await db.post.findMany({
    where: { published: true },
    include: { author: true },
    orderBy: { createdAt: 'desc' },
    take: 10,
  });

  return (
    <div>
      <h1>最新文章</h1>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}