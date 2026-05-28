// 从第 33 章提取
// 代码清单: 静态生成 generateStaticParams
// 文件名: chapter33_BlogPostPage.tsx
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  // 预渲染所有文章的静态页面
  const posts = await db.post.findMany({
    select: { slug: true },
    where: { published: true },
  });

  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return <Article post={post} />;
}
