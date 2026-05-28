// 从第 11 章提取
// 代码清单: app/[[...slug]]/page.tsx
// 文件名: chapter11_page_2.tsx
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
