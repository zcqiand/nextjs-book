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