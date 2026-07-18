// app/[[...slug]]/page.tsx
export default function CatchAllPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  if (!params.slug) {
    return <h1>首页</h1>;
  }

  return <h1>路径: {params.slug.join('/')}</h1>;
}