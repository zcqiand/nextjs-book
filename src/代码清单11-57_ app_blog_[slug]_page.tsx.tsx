// app/blog/[slug]/page.tsx
// 这个文件匹配 /blog/* 的所有 URL

export default function BlogPostPage({ params }) {
  const { slug } = params;
  // 根据 slug 获取对应的文章内容
  const post = getPostBySlug(slug);

  return <h1>{post.title}</h1>;
}