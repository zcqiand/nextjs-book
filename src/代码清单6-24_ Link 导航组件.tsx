// app/layout.tsx
import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="header">
          <div className="container">
            <Link href="/" className="logo">
              Next.js 教程
            </Link>
            <nav className="nav">
              <Link href="/" className="nav-link">首页</Link>
              <Link href="/about" className="nav-link">关于</Link>
              <Link href="/blog" className="nav-link">博客</Link>
              <Link href="/contact" className="nav-link">联系</Link>
            </nav>
          </div>
        </header>

        <main className="main">
          {children}
        </main>

        <footer className="footer">
          <p>&copy; 2024 Next.js 教程</p>
        </footer>
      </body>
    </html>
  );
}