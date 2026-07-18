// 可以在组件中直接渲染 metadata
export default function BlogPost({ post }) {
  return (
    <article>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
      <meta property="og:title" content={post.title} />
      <h1>{post.title}</h1>
    </article>
  );
}