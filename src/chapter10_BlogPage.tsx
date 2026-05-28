// 从第 10 章提取
// 代码清单: Link 导航组件
// 文件名: chapter10_BlogPage.tsx
// src/app/blog/page.tsx
import Link from 'next/link';

const posts = [
  {
    slug: 'nextjs-15',
    title: 'Next.js 15 发布公告',
    excerpt: '了解 Next.js 15 的新特性和改进。Next.js 15 引入了更快的构建速度和更好的开发体验。',
    category: 'tech',
    date: '2024-10-01',
  },
  {
    slug: 'app-router',
    title: 'App Router 完全指南',
    excerpt: '深入了解 App Router 的所有特性。App Router 是 Next.js 13 引入的新路由系统。',
    category: 'tech',
    date: '2024-09-15',
  },
  {
    slug: 'remote-work',
    title: '远程工作一年记',
    excerpt: '分享我远程工作一年的经验和感悟。远程工作已经成为越来越多人选择的工作方式。',
    category: 'life',
    date: '2024-09-01',
  },
];

export const metadata = {
  title: '博客 - 我的博客',
  description: '阅读最新的技术文章和生活分享',
};

export default function BlogPage() {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>博客文章</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {posts.map((post) => (
          <article
            key={post.slug}
            style={{
              padding: '1.5rem',
              border: '1px solid #eee',
              borderRadius: '8px',
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.5rem'
            }}>
              <span style={{
                fontSize: '0.75rem',
                padding: '0.25rem 0.5rem',
                backgroundColor: '#e3f2fd',
                color: '#1976d2',
                borderRadius: '4px'
              }}>
                {post.category === 'tech' ? '技术' : post.category === 'life' ? '生活' : '教程'}
              </span>
              <span style={{ fontSize: '0.875rem', color: '#666' }}>{post.date}</span>
            </div>
            <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem' }}>
              <Link
                href={`/blog/${post.slug}`}
                style={{ color: '#333', textDecoration: 'none' }}
              >
                {post.title}
              </Link>
            </h2>
            <p style={{ margin: 0, color: '#666', lineHeight: 1.6 }}>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
