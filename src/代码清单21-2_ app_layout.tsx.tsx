// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        {/* 全局导航 */}
        <GlobalNav />

        {/* 模块内容 */}
        {children}

        {/* 全局 Footer */}
        <GlobalFooter />
      </body>
    </html>
  );
}