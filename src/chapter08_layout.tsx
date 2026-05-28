// 从第 8 章提取
// 代码清单: src/app/layout.tsx
// 文件名: chapter08_layout.tsx
// src/app/layout.tsx
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
