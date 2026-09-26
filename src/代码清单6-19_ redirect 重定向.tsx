import { redirect } from 'next/navigation';

export default function AdminPage() {
  const isAdmin = getCurrentUser().isAdmin;

  if (!isAdmin) {
    redirect('/login'); // 重定向到登录页
  }

  return <AdminDashboard />;
}