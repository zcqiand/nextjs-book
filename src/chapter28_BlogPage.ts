// 从第 28 章提取
// 代码清单: app/blog/page.tsx
// 文件名: chapter28_BlogPage.ts
// app/blog/page.tsx
import { Suspense } from 'react';

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const category = typeof params.category === 'string' ? params.category : undefined;
  const tag = typeof params.tag === 'string' ? params.tag : undefined;
  const page = typeof params.page === 'string' ? parseInt(params.page) : 1;

  const posts = await getPosts({ category, tag, page });

  return (
    <div>
      <h1>博客</h1>
      {category && <p>分类: {category}</p>}
      {tag && <p>标签: {tag}</p>}
      <PostList posts={posts} />
    </div>
  );
}
