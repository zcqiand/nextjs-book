// 从第 19 章提取
// 代码清单: ISR revalidate 配置
// 文件名: chapter19_BlogPostPage.ts
// app/blog/[slug]/page.tsx

// 博客文章使用 ISR，60 秒后重新验证
export const revalidate = 60;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  return <Article post={post} />;
}
