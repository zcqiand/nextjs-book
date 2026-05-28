// 从第 9 章提取
// 代码清单: headers 操作
// 文件名: chapter09_DashboardPage.ts
// app/dashboard/page.tsx
import { headers } from 'next/headers';

export default async function DashboardPage() {
  const flags = (await headers()).get('x-ff-new-dashboard');
  const showNewDashboard = flags === 'true';

  return showNewDashboard ? <NewDashboard /> : <OldDashboard />;
}
