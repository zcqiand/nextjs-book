// 从第 13 章提取
// 代码清单: notFound 处理
// 文件名: chapter13_BlogPostPage.ts
// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  // 如果文章不存在，显示 404 页面
  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
