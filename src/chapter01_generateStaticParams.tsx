// 从第 1 章提取
// 代码清单: 静态生成 generateStaticParams
// 文件名: chapter01_generateStaticParams.tsx
// 静态生成 — 构建时预渲染所有文章页面
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}
