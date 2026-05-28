// 从第 33 章提取
// 代码清单: app/blog/page.tsx (Server Component)
// 文件名: chapter33_BlogPage.ts
// app/blog/page.tsx (Server Component)
export default async function BlogPage() {
  // 直接数据库查询 - 服务端执行
  const posts = await db.post.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
  });

  return (
    <div>
      <h1>博客</h1>

      {/* Client Component 处理交互 */}
      <PostFilter posts={posts} />
    </div>
  );
}
