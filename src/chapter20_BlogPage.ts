// 从第 20 章提取
// 代码清单: ISR revalidate 配置
// 文件名: chapter20_BlogPage.ts
// 页面静态生成后，每 60 秒重新验证
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await fetch('https://api.example.com/posts').then(r => r.json());
  return <BlogList posts={posts} />;
}
