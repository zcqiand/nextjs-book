// app/blog/page.tsx
export const revalidate = 60; // 每 60 秒重新验证

export default async function BlogPage() {
  const posts = await fetchPosts();
  return <PostList posts={posts} />;
}