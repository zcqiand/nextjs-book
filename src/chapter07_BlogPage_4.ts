// 从第 7 章提取
// 代码清单: Link 导航组件
// 文件名: chapter07_BlogPage_4.ts
// src/app/blog/page.tsx
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: '博客',
  description: '阅读最新的 Next.js 文章',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

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
              {post.date} · {post.author}
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
