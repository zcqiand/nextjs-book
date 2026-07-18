// app/blog/[slug]/page.tsx

// 60 秒后重新验证页面
export const revalidate = 60;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return <Article post={post} />;
}