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