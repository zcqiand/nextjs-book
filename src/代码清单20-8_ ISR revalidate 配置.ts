// 页面静态生成后，每 60 秒重新验证
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await fetch('https://api.example.com/posts').then(r => r.json());
  return <BlogList posts={posts} />;
}