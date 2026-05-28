// 从第 6 章提取
// 代码清单: Link 导航组件
// 文件名: chapter06_BlogPage.tsx
// app/blog/page.tsx
import Link from 'next/link';

const posts = [
  {
    id: '1',
    title: 'Next.js 15 发布公告',
    excerpt: '了解 Next.js 15 的新特性和改进。',
    date: '2024-10-01',
    slug: 'nextjs-15-announcement',
  },
  {
    id: '2',
    title: 'App Router 完全指南',
    excerpt: '深入了解 App Router 的所有特性。',
    date: '2024-09-15',
    slug: 'app-router-complete-guide',
  },
  {
    id: '3',
    title: 'React Server Components 入门',
    excerpt: 'RSC 如何改变 React 开发方式。',
    date: '2024-09-01',
    slug: 'rsc-getting-started',
  },
];

export default function BlogPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>博客</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {posts.map((post) => (
          <article
            key={post.id}
            style={{
              border: '1px solid #eee',
              borderRadius: '8px',
              padding: '1.5rem',
              transition: 'box-shadow 0.2s',
            }}
          >
            <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
              {post.date}
            </p>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              <Link
                href={`/blog/${post.slug}`}
                style={{ color: '#0070f3', textDecoration: 'none' }}
              >
                {post.title}
              </Link>
            </h2>
            <p style={{ color: '#666', lineHeight: 1.6 }}>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
