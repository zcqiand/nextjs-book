// 从第 9 章提取
// 代码清单: redirect 重定向
// 文件名: chapter09_DashboardPage_2.ts
// app/dashboard/page.tsx
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const headersList = await headers();
  const userId = headersList.get('x-user-id');
  const userEmail = headersList.get('x-user-email');
  const userRole = headersList.get('x-user-role');

  if (!userId) {
    redirect('/login');
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">用户信息</h2>
        <dl className="space-y-2">
          <div>
            <dt className="text-gray-500">用户 ID</dt>
            <dd className="font-mono">{userId}</dd>
          </div>
          <div>
            <dt className="text-gray-500">邮箱</dt>
            <dd>{userEmail}</dd>
          </div>
          <div>
            <dt className="text-gray-500">角色</dt>
            <dd className="capitalize">{userRole}</dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
