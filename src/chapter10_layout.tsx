// 从第 10 章提取
// 代码清单: app/blog/layout.tsx
// 文件名: chapter10_layout.tsx
// app/blog/layout.tsx
import { getUser } from '@/lib/auth';

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 在布局中获取用户数据
  const user = await getUser();

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <aside>
        {/* 侧边栏内容 */}
        <div>
          {user ? (
            <p>欢迎，{user.name}</p>
          ) : (
            <p>请登录</p>
          )}
        </div>
        {/* 更多侧边栏内容 */}
      </aside>
      <div>{children}</div>
    </div>
  );
}
