// 从第 11 章提取
// 代码清单: Next.js 15 中的写法（使用 use 钩子）
// 文件名: chapter11_BlogPostPage_2.tsx
// Next.js 15 中的写法（使用 use 钩子）
import { use } from 'react';

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  return <h1>文章: {slug}</h1>;
}
