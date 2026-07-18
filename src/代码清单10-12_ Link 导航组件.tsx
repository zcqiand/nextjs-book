// src/app/blog/layout.tsx
import Link from 'next/link';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      {/* 博客侧边栏 */}
      <aside style={{ width: '250px', flexShrink: 0 }}>
        <div style={{
          padding: '1rem',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          position: 'sticky',
          top: '2rem'
        }}>
          <h3 style={{ marginTop: 0 }}>文章分类</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/blog?category=tech" style={{ color: '#0070f3', textDecoration: 'none' }}>
                技术文章
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/blog?category=life" style={{ color: '#0070f3', textDecoration: 'none' }}>
                生活分享
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/blog?category=tutorial" style={{ color: '#0070f3', textDecoration: 'none' }}>
                教程系列
              </Link>
            </li>
          </ul>

          <h3 style={{ marginTop: '1.5rem' }}>最新文章</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/blog/nextjs-15" style={{ color: '#0070f3', textDecoration: 'none', fontSize: '0.875rem' }}>
                Next.js 15 发布公告
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/blog/app-router" style={{ color: '#0070f3', textDecoration: 'none', fontSize: '0.875rem' }}>
                App Router 完全指南
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link href="/blog/remote-work" style={{ color: '#0070f3', textDecoration: 'none', fontSize: '0.875rem' }}>
                远程工作一年记
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* 主内容区域 */}
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
}