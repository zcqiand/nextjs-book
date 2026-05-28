// 从第 11 章提取
// 代码清单: Next.js 14 及之前的写法
// 文件名: chapter11_BlogPostPage_3.tsx
// Next.js 14 及之前的写法
export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return <h1>文章: {slug}</h1>;
}
