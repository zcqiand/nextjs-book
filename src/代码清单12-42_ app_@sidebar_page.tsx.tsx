// app/@sidebar/page.tsx
export default function Sidebar() {
  return (
    <aside style={{
      width: '250px',
      backgroundColor: '#2c3e50',
      color: 'white',
      minHeight: '100vh',
      padding: '1rem',
    }}>
      <h2 style={{ marginBottom: '1.5rem' }}>我的仪表盘</h2>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
          概览
        </a>
        <a href="/dashboard/analytics" style={{ color: 'white', textDecoration: 'none' }}>
          数据分析
        </a>
        <a href="/dashboard/reports" style={{ color: 'white', textDecoration: 'none' }}>
          报告
        </a>
        <a href="/dashboard/settings" style={{ color: 'white', textDecoration: 'none' }}>
          设置
        </a>
      </nav>
    </aside>
  );
}