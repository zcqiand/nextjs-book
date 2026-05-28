// 从第 4 章提取
// 代码清单: App Router 的数据获取方式
// 文件名: chapter04_route.ts
// App Router 的数据获取方式
// 数据获取直接写在组件内部
export default async function BlogPage() {
  // 直接在组件内部获取数据，不需要额外的函数
  const posts = await fetchPosts();

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
