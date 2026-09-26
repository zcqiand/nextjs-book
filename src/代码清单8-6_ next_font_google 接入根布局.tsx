// src/app/layout.tsx
import type { ReactNode } from 'react';
import { Noto_Sans_SC } from 'next/font/google';
import './globals.css';

// 中文读者场景选 Noto Sans SC；做英文界面时换 Inter 等字体即可，
// 导入与配置方式完全一致。
// 这一步替代了手写 font-family、往页面里塞 <link> 字体标签的老做法
const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-sc',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className={notoSansSC.variable}>
      {/* className 挂在 body 上，全站文本即应用该字体 */}
      <body className={`${notoSansSC.className} antialiased`}>{children}</body>
    </html>
  );
}