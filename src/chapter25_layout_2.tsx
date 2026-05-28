// 从第 25 章提取
// 代码清单: app/layout.tsx
// 文件名: chapter25_layout_2.tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 预加载关键字体 */}
        <link
          rel="preload"
          href="/fonts/main.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* DNS 预解析外部域名 */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
