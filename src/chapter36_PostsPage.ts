// 从第 36 章提取
// 代码清单: app/posts/page.tsx
// 文件名: chapter36_PostsPage.ts
// app/posts/page.tsx
export default async function PostsPage() {
  // 直接在 Server Component 中获取数据
  const posts = await fetch('https://api.example.com/posts', {
    cache: 'force-cache', // 默认值
  }).then(res => res.json());

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
