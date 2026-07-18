// app/admin/page.tsx
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const headersList = await headers();
  const userRole = headersList.get('x-user-role');

  if (userRole !== 'admin') {
    redirect('/dashboard');
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">管理员面板</h1>
      <p>只有管理员可以看到这个页面。</p>
      {/* 管理员功能... */}
    </main>
  );
}