// 从第 21 章提取
// 代码清单: dashboard 微应用
// 文件名: chapter21_DashboardContent.ts
// dashboard 微应用
import { useUserStore } from '@shared/store';

function DashboardContent() {
  const { user, logout } = useUserStore();

  return (
    <div>
      <h2>欢迎, {user?.name}</h2>
      <button onClick={logout}>退出登录</button>
    </div>
  );
}
