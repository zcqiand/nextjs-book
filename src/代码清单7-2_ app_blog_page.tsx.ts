// app/blog/page.tsx
export default async function BlogPage() {
  // 直接在组件中 await fetch
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();

  return (
    <main>
      <h1>博客</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </main>
  );
}