// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: '我的博客 - 分享技术与生活',
    template: '%s | 我的博客',
  },
  description: '这是一个分享技术与生活的个人博客，涵盖前端开发、后端技术、DevOps 等主题。',
  keywords: ['博客', '技术', '前端', '后端', 'Next.js', 'React'],
  authors: [{ name: '张三', url: 'https://example.com' }],
  creator: '张三',
  publisher: '我的博客',
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: 'https://example.com',
    languages: {
      'zh-CN': 'https://example.com/zh-CN',
      'en-US': 'https://example.com/en-US',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://example.com',
    siteName: '我的博客',
    title: '我的博客 - 分享技术与生活',
    description: '这是一个分享技术与生活的个人博客',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '我的博客封面图',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '我的博客 - 分享技术与生活',
    description: '这是一个分享技术与生活的个人博客',
    images: ['/og-image.png'],
  },
  robots: {
    indexFollow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: 'large',
      maxSnippet: -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}