// app/(admin)/layout.tsx
// 注：「任务管理 / 成员管理 / 设置」是管理台的前瞻性导航入口，对应后续扩展的子页面；
// 它们不在清单 12-5 的目录树内，照本清单运行时点击会 404，属预期现象。
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      <aside style={{
        width: '250px',
        backgroundColor: '#2c3e50',
        color: 'white',
        position: 'fixed',
        height: '100vh',
        padding: '1rem',
      }}>
        <h2 style={{ marginBottom: '1.5rem' }}>管理台</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
            仪表盘
          </a>
          <a href="/dashboard/tasks" style={{ color: 'white', textDecoration: 'none' }}>
            任务管理
          </a>
          <a href="/dashboard/members" style={{ color: 'white', textDecoration: 'none' }}>
            成员管理
          </a>
          <a href="/dashboard/settings" style={{ color: 'white', textDecoration: 'none' }}>
            设置
          </a>
        </nav>
      </aside>

      <main style={{ marginLeft: '250px', padding: '2rem' }}>
        {children}
      </main>
    </div>
  );
}