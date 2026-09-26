// app/(app)/layout.tsx
// 注：「成员」对应的 /members 页面未包含在清单 12-5 的目录树内，
// 它是成员模块的前瞻性导航入口，照本清单运行时点击会 404，属预期现象。
export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: '#333', color: 'white', padding: '1rem' }}>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>首页</a>
          <a href="/boards" style={{ color: 'white', textDecoration: 'none' }}>看板</a>
          <a href="/tasks" style={{ color: 'white', textDecoration: 'none' }}>任务</a>
          <a href="/members" style={{ color: 'white', textDecoration: 'none' }}>成员</a>
        </nav>
      </header>

      <main style={{ flex: 1, padding: '2rem' }}>
        {children}
      </main>

      <footer style={{ backgroundColor: '#f5f5f5', padding: '1rem', textAlign: 'center' }}>
        © 2026 taskflow-board
      </footer>
    </div>
  );
}