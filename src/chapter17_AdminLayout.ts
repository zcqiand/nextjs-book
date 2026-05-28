// 从第 17 章提取
// 代码清单: redirect 重定向
// 文件名: chapter17_AdminLayout.ts
// src/app/(admin)/layout.tsx
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  if (session.user.role !== 'ADMIN') {
    redirect('/');
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-lg font-bold mb-6">管理后台</h2>
        <nav className="space-y-2">
          <Link href="/admin/dashboard" className="block p-2 rounded hover:bg-gray-800">
            仪表盘
          </Link>
          <Link href="/admin/posts" className="block p-2 rounded hover:bg-gray-800">
            文章管理
          </Link>
          <Link href="/admin/users" className="block p-2 rounded hover:bg-gray-800">
            用户管理
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
