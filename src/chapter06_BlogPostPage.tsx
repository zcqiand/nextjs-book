// 从第 6 章提取
// 代码清单: Link 导航组件
// 文件名: chapter06_BlogPostPage.tsx
// app/blog/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';

const posts = {
  'nextjs-15-announcement': {
    title: 'Next.js 15 发布公告',
    content: 'Next.js 15 引入了许多令人兴奋的新特性...',
    date: '2024-10-01',
  },
  'app-router-complete-guide': {
    title: 'App Router 完全指南',
    content: 'App Router 是 Next.js 13 引入的新路由系统...',
    date: '2024-09-15',
  },
  'rsc-getting-started': {
    title: 'React Server Components 入门',
    content: 'React Server Components 是 React 18 引入的新概念...',
    date: '2024-09-01',
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
      <Link href="/blog" style={{ color: '#0070f3', textDecoration: 'none' }}>
        ← 返回博客列表
      </Link>

      <article style={{ marginTop: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{post.title}</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>{post.date}</p>
        <div style={{ lineHeight: 1.8, fontSize: '1.125rem' }}>{post.content}</div>
      </article>
    </main>
  );
}
