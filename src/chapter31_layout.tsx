// 从第 31 章提取
// 代码清单: src/app/layout.tsx
// 文件名: chapter31_layout.tsx
// src/app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
