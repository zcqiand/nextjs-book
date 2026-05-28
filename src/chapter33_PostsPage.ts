// 从第 33 章提取
// 代码清单: app/posts/page.tsx
// 文件名: chapter33_PostsPage.ts
// app/posts/page.tsx
export const dynamic = 'force-static';

export default async function PostsPage() {
  // 构建时执行
  const posts = await db.post.findMany({
    where: { published: true },
  });

  return <PostList posts={posts} />;
}
