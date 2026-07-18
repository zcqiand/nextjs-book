// app/blog/[slug]/page.tsx
// Next.js 15 需要将组件改为异步
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 需要 await params
  const { slug } = await params;
  return <h1>文章: {slug}</h1>;
}