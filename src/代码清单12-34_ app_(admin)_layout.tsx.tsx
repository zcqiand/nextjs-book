// app/(admin)/layout.tsx
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
        <h2 style={{ marginBottom: '1.5rem' }}>管理后台</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
            仪表盘
          </a>
          <a href="/dashboard/posts" style={{ color: 'white', textDecoration: 'none' }}>
            文章管理
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