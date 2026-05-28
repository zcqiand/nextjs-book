// 从第 20 章提取
// 代码清单: app/posts/page.tsx
// 文件名: chapter20_PostsPage_2.ts
// app/posts/page.tsx
import { cache } from 'react';
import { db } from '@/lib/db';

// 缓存这个查询，相同的参数不会重复执行
const getPublishedPosts = cache(async (take: number = 10) => {
  return db.post.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take,
  });
});

export default async function PostsPage() {
  // 多次调用 getPublishedPosts 只会执行一次数据库查询
  const posts = await getPublishedPosts(10);
  const featuredPosts = await getPublishedPosts(3);

  return (
    <div>
      <FeaturedPosts posts={featuredPosts} />
      <AllPosts posts={posts} />
    </div>
  );
}
