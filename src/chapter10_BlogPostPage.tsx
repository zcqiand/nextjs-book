// 从第 10 章提取
// 代码清单: 静态生成 generateStaticParams
// 文件名: chapter10_BlogPostPage.tsx
// src/app/blog/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';

const posts = {
  'nextjs-15': {
    title: 'Next.js 15 发布公告',
    content: 'Next.js 15 引入了许多令人兴奋的新特性，包括更快的构建速度、改进的缓存机制，以及全新的开发体验。我们将在本文中详细介绍这些新特性。',
    author: '张三',
    date: '2024-10-01',
  },
  'app-router': {
    title: 'App Router 完全指南',
    content: 'App Router 是 Next.js 13 引入的新路由系统，带来了一系列激动人心的特性。它不仅改变了文件的组织方式，还引入了 React Server Components、嵌套布局等新概念。',
    author: '李四',
    date: '2024-09-15',
  },
  'remote-work': {
    title: '远程工作一年记',
    content: '远程工作已经成为了我过去一年的常态。这篇文章分享一些我的经验和感悟，包括如何保持工作效率、如何与团队协作、以及如何处理工作与生活的平衡。',
    author: '王五',
    date: '2024-09-01',
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];
  if (!post) {
    return { title: '文章未找到' };
  }
  return {
    title: `${post.title} - 我的博客`,
    description: post.content.slice(0, 100),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <article>
      <Link
        href="/blog"
        style={{
          display: 'inline-block',
          marginBottom: '1rem',
          color: '#0070f3',
          textDecoration: 'none',
          fontSize: '0.875rem'
        }}
      >
        ← 返回博客列表
      </Link>

      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{post.title}</h1>
      <div style={{ marginBottom: '1.5rem', color: '#666', fontSize: '0.875rem' }}>
        <span>作者: {post.author}</span>
        <span style={{ margin: '0 1rem' }}>·</span>
        <span>发布日期: {post.date}</span>
      </div>
      <div style={{ lineHeight: 1.8 }}>{post.content}</div>
    </article>
  );
}
