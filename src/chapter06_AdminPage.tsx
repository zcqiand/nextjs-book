// 从第 6 章提取
// 代码清单: redirect 重定向
// 文件名: chapter06_AdminPage.tsx
import { redirect } from 'next/navigation';

export default function AdminPage() {
  const isAdmin = getCurrentUser().isAdmin;

  if (!isAdmin) {
    redirect('/login'); // 重定向到登录页
  }

  return <AdminDashboard />;
}
