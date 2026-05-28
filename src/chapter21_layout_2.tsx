// 从第 21 章提取
// 代码清单: app/layout.tsx
// 文件名: chapter21_layout_2.tsx
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
