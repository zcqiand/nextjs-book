// app/[[...slug]]/page.tsx
export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  if (!slug) {
    return <h1>首页</h1>;
  }

  return <h1>路径: {slug.join('/')}</h1>;
}