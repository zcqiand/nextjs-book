// Next.js 14 及之前的写法
export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return <h1>文章: {slug}</h1>;
}