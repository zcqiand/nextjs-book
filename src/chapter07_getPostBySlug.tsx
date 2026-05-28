// 从第 7 章提取
// 代码清单: src/lib/posts.ts
// 文件名: chapter07_getPostBySlug.tsx
// src/lib/posts.ts
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  slug: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Next.js 15 发布公告',
    slug: 'nextjs-15-announcement',
    excerpt: '了解 Next.js 15 的新特性和改进。',
    content: 'Next.js 15 引入了许多令人兴奋的新特性，包括更快的构建速度、改进的缓存机制，以及全新的瞪羚状态。我们将在本书中详细介绍这些特性。',
    author: '张三',
    date: '2024-10-01',
  },
  {
    id: '2',
    title: 'App Router 完全指南',
    slug: 'app-router-complete-guide',
    excerpt: '深入了解 App Router 的所有特性。',
    content: 'App Router 是 Next.js 13 引入的新路由系统。它带来了许多激动人心的特性，如 React Server Components、嵌套布局、流式渲染等。',
    author: '李四',
    date: '2024-09-15',
  },
  {
    id: '3',
    title: 'React Server Components 入门',
    slug: 'rsc-getting-started',
    excerpt: 'RSC 如何改变 React 开发方式。',
    content: 'React Server Components 是 React 18 引入的新概念。它允许我们在服务端组件中直接获取数据，减少客户端 JavaScript 的体积。',
    author: '王五',
    date: '2024-09-01',
  },
];

export async function getPostBySlug(slug: string): Promise<Post | null> {
  // 模拟数据库查询延迟
  await new Promise(resolve => setTimeout(resolve, 100));
  return posts.find(p => p.slug === slug) || null;
}

export async function getAllPosts(): Promise<Post[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return posts;
}
