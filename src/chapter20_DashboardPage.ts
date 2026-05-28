// 从第 20 章提取
// 代码清单: app/dashboard/page.tsx
// 文件名: chapter20_DashboardPage.ts
// app/dashboard/page.tsx
export default async function DashboardPage() {
  // 并行执行三个查询
  const [user, posts, comments] = await Promise.all([
    getCurrentUser(),
    getUserPosts(),
    getRecentComments(),
  ]);

  return (
    <Dashboard
      user={user}
      posts={posts}
      comments={comments}
    />
  );
}
