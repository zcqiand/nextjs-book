// 从第 7 章提取
// 代码清单: BlogPage 函数
// 文件名: chapter07_BlogPage_2.ts
export default async function BlogPage() {
  const res = await fetch('https://api.example.com/posts', {
    // 可选配置
    cache: 'force-cache',     // 默认：缓存请求结果
    next: { revalidate: 3600 }, // 1小时后台重新验证
  });

  const posts = await res.json();
  return <BlogList posts={posts} />;
}
