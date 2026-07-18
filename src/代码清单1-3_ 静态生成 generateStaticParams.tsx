// 静态生成 — 构建时预渲染所有文章页面
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}