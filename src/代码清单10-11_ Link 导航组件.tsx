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
            我的博客
          </Link>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/blog" style={{ color: '#666', textDecoration: 'none' }}>博客</Link>
            <Link href="/about" style={{ color: '#666', textDecoration: 'none' }}>关于</Link>
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
          <p>&copy; 2024 我的博客. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}