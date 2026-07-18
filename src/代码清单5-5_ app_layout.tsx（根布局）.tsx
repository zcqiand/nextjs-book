// app/layout.tsx（根布局）
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        {/* 全局导航栏 */}
        <header style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
          <nav>
            <a href="/" style={{ marginRight: '1rem' }}>首页</a>
            <a href="/about" style={{ marginRight: '1rem' }}>关于我们</a>
            <a href="/contact">联系方式</a>
          </nav>
        </header>

        {/* 页面内容通过 children prop 传入 */}
        {children}

        {/* 全局 Footer */}
        <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid #eee' }}>
          <p>&copy; 2024 Next.js 教程</p>
        </footer>
      </body>
    </html>
  );
}