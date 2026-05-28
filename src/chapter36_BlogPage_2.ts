// 从第 36 章提取
// 代码清单: ISR revalidate 配置
// 文件名: chapter36_BlogPage_2.ts
// app/blog/page.tsx
export const revalidate = 60; // 每 60 秒重新验证

export default async function BlogPage() {
  const posts = await fetchPosts();
  return <PostList posts={posts} />;
}
