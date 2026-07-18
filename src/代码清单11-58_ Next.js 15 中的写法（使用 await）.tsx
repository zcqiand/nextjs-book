// Next.js 15 中的写法（使用 await）
export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <h1>文章: {slug}</h1>;
}