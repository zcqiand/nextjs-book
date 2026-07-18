// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        {/* 跳转到主内容的链接 */}
        <a
          href="#main-content"
          className="skip-link"
        >
          跳转到主要内容
        </a>

        <header>
          <nav>导航菜单</nav>
        </header>

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <footer>页脚</footer>
      </body>
    </html>
  );
}