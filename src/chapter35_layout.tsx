// 从第 35 章提取
// 代码清单: app/layout.tsx - 根布局
// 文件名: chapter35_layout.tsx
// app/layout.tsx - 根布局
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        <GlobalNav />
        <main>{children}</main>
        <GlobalFooter />
      </body>
    </html>
  );
}
