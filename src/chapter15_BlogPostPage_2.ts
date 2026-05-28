// 从第 15 章提取
// 代码清单: ISR revalidate 配置
// 文件名: chapter15_BlogPostPage_2.ts
// app/blog/[slug]/page.tsx

// 启用 ISR，60 秒后重新验证
// 这个功能在 Next.js 15 中没有变化
export const revalidate = 60;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
