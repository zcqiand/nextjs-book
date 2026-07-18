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