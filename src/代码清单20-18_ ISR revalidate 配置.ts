// app/blog/[slug]/page.tsx
// 静态生成博客文章（ISR）
export const revalidate = 60;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 静态内容：标题、正文、作者（从 CMS 获取）
  const post = await getBlogPost(slug);

  // 动态内容：评论数、点赞数（客户端获取）
  // 这个组件会在客户端单独请求
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      <LikeButton postId={post.id} initialLikes={post.likes} />
      <CommentCount postId={post.id} />
    </article>
  );
}