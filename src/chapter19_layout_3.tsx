// 从第 19 章提取
// 代码清单: app/layout.tsx
// 文件名: chapter19_layout_3.tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 预加载关键资源 */}
        <link
          rel="preload"
          href="/fonts/main.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* 预获取将来可能需要的资源 */}
        <link rel="prefetch" href="/next-page.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
