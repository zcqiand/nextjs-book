// src/app/blog/[slug]/page.tsx
export default function BlogPostPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>博客文章页面</h1>
      <p>这个页面可以匹配 /blog/任意-slug</p>
      <p>例如：/blog/nextjs-intro、/blog/getting-started 等</p>
    </main>
  );
}