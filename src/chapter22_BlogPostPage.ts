// 从第 22 章提取
// 代码清单: notFound 处理
// 文件名: chapter22_BlogPostPage.ts
// 定义路由参数类型
interface RouteParams {
  '/blog/[slug]': { slug: string };
  '/users/[id]': { id: string };
  '/category/[...path]': { path: string[] };
}

// 类型安全的 params 使用
export default async function BlogPostPage({
  params,
}: {
  params: RouteParams['/blog/[slug]'];
}) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <Article post={post} />;
}
