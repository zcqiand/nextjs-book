// 从第 33 章提取
// 代码清单: app/dashboard/page.tsx
// 文件名: chapter33_DashboardPage.ts
// app/dashboard/page.tsx
export default async function DashboardPage() {
  // 并行获取多个数据源
  const [user, stats, notifications] = await Promise.all([
    getCurrentUser(),
    getDashboardStats(),
    getNotifications(),
  ]);

  return (
    <Dashboard
      user={user}
      stats={stats}
      notifications={notifications}
    />
  );
}
