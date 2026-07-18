export default async function BlogPage() {
  const res = await fetch('https://api.example.com/posts', {
    // 可选配置
    cache: 'force-cache',     // 默认：缓存请求结果
    next: { revalidate: 3600 }, // 1小时后台重新验证
  });

  const posts = await res.json();
  return <BlogList posts={posts} />;
}