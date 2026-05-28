// 从第 11 章提取
// 代码清单: 静态生成 generateStaticParams
// 文件名: chapter11_BlogPostPage_6.tsx
// src/app/blog/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';

const posts = {
  'nextjs-15': {
    title: 'Next.js 15 发布公告',
    content: 'Next.js 15 引入了许多令人兴奋的新特性，包括更快的构建速度和更好的开发体验。我们将在本文中详细介绍这些新特性。',
    author: '张三',
    date: '2024-10-01',
    category: '技术',
  },
  'app-router': {
    title: 'App Router 完全指南',
    content: 'App Router 是 Next.js 13 引入的新路由系统，带来了一系列激动人心的特性。它不仅改变了文件的组织方式，还引入了 React Server Components、嵌套布局等新概念。',
    author: '李四',
    date: '2024-09-15',
    category: '技术',
  },
  'remote-work': {
    title: '远程工作一年记',
    content: '远程工作已经成为了我过去一年的常态。这篇文章分享一些我的经验和感悟，包括如何保持工作效率、如何与团队协作、以及如何处理工作与生活的平衡。',
    author: '王五',
    date: '2024-09-01',
    category: '生活',
  },
};

// 生成静态参数列表
export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

// 生成动态 metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return { title: '文章未找到' };
  }

  return {
    title: post.title,
    description: post.content.slice(0, 100),
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 100),
    },
  };
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <Link href="/blog" style={{ color: '#0070f3', textDecoration: 'none' }}>
        ← 返回博客列表
      </Link>

      <article style={{ marginTop: '1.5rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <span style={{
            fontSize: '0.75rem',
            padding: '0.25rem 0.5rem',
            backgroundColor: '#e3f2fd',
            color: '#1976d2',
            borderRadius: '4px',
            marginRight: '0.5rem',
          }}>
            {post.category}
          </span>
          <span style={{ fontSize: '0.875rem', color: '#666' }}>
            {post.date}
          </span>
        </div>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          {post.title}
        </h1>

        <div style={{
          marginBottom: '2rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid #eee',
          color: '#666',
        }}>
          <span>作者: {post.author}</span>
        </div>

        <div style={{ lineHeight: 1.8, fontSize: '1.125rem' }}>
          {post.content}
        </div>
      </article>
    </main>
  );
}
