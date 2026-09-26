// src/app/(app)/layout.tsx
import Link from 'next/link';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      {/* 工作台侧边栏 */}
      <aside style={{ width: '250px', flexShrink: 0 }}>
        <div style={{
          padding: '1rem',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          position: 'sticky',
          top: '2rem'
        }}>
          <h3 style={{ marginTop: 0 }}>看板导航</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/boards/design-refresh" style={{ color: '#0070f3', textDecoration: 'none' }}>
                官网改版
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/boards/mobile-app" style={{ color: '#0070f3', textDecoration: 'none' }}>
                移动端适配
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/boards/content-launch" style={{ color: '#0070f3', textDecoration: 'none' }}>
                内容上线
              </Link>
            </li>
          </ul>

          <h3 style={{ marginTop: '1.5rem' }}>快捷入口</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/boards" style={{ color: '#0070f3', textDecoration: 'none', fontSize: '0.875rem' }}>
                全部看板
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/tasks" style={{ color: '#0070f3', textDecoration: 'none', fontSize: '0.875rem' }}>
                我的任务
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* 主内容区域 */}
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
}