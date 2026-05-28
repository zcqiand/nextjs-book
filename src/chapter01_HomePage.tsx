// 从第 1 章提取
// 代码清单: Server Component 示例
// 文件名: chapter01_HomePage.tsx
// app/page.tsx — 这是一个 Server Component
export default async function HomePage() {
  // 直接在服务端获取数据，无需 useEffect，无需 useState
  const posts = await fetchPosts();
  return (
    <main>
      <h1>我的博客</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </main>
  );
}
