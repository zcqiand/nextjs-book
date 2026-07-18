// app/blog/[slug]/page.tsx
export default async function BlogPostPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}) {
  // params.slug 来自文件夹名 [slug]
  const { slug } = params;

  // searchParams 来自 URL 查询参数 ?tab=team
  const tab = searchParams.tab;

  return (
    <main>
      <h1>文章: {slug}</h1>
      {tab && <p>当前标签: {tab}</p>}
    </main>
  );
}