// app/blog/[slug]/page.tsx
// 这是在 Next.js 14 中常见的使用方式
export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  // params 是同步对象，直接访问
  const { slug } = params;
  return <h1>文章: {slug}</h1>;
}