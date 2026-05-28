// 从第 11 章提取
// 代码清单: Next.js 15 中的写法（使用 await）
// 文件名: chapter11_BlogPostPage.tsx
// Next.js 15 中的写法（使用 await）
export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <h1>文章: {slug}</h1>;
}
