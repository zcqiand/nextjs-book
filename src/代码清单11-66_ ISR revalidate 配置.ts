// app/blog/[slug]/page.tsx
export default async function BlogPostPage({ params }) {
  // 模拟数据获取
  const post = await getPost(params.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}

// 启用 ISR，60秒后重新验证
export const revalidate = 60;