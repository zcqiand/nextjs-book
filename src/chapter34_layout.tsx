// 从第 34 章提取
// 代码清单: app/layout.tsx
// 文件名: chapter34_layout.tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
