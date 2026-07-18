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