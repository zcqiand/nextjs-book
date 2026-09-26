// src/app/layout.tsx
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        <header style={{
          padding: '1rem 2rem',
          borderBottom: '1px solid #eee',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <Link href="/" style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '#333'
          }}>
            taskflow-board
          </Link>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>首页</Link>
            <Link href="/boards" style={{ color: '#666', textDecoration: 'none' }}>看板</Link>
            <Link href="/tasks" style={{ color: '#666', textDecoration: 'none' }}>任务</Link>
          </nav>
        </header>

        <main style={{ minHeight: 'calc(100vh - 130px)', padding: '2rem' }}>
          {children}
        </main>

        <footer style={{
          padding: '2rem',
          textAlign: 'center',
          borderTop: '1px solid #eee',
          color: '#666'
        }}>
          <p>&copy; 2026 taskflow-board. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}