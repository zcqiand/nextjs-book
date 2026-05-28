// 从第 15 章提取
// 代码清单: generateMetadata 函数
// 文件名: chapter15_generateMetadata.tsx
// Next.js 15 中 generateMetadata 的写法
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: post.title,
    description: post.content.slice(0, 100),
  };
}
