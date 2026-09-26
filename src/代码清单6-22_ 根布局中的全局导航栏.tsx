// src/app/layout.tsx
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
              taskflow-board
            </Link>
            <nav className="nav">
              <Link href="/tasks" className="nav-link">任务</Link>
              <Link href="/members" className="nav-link">成员</Link>
              <Link href="/about" className="nav-link">关于</Link>
            </nav>
          </div>
        </header>

        <main className="main">
          {children}
        </main>

        <footer className="footer">
          <p>&copy; 2026 taskflow-board</p>
        </footer>
      </body>
    </html>
  );
}