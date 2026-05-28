// 从第 20 章提取
// 代码清单: notFound 处理
// 文件名: chapter20_CategoryPage.ts
// app/category/[slug]/page.tsx
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // 第一步：获取分类信息
  const category = await db.category.findUnique({
    where: { slug },
  });

  if (!category) {
    notFound();
  }

  // 第二步：基于分类获取文章（依赖分类 ID）
  const posts = await db.post.findMany({
    where: { categoryId: category.id },
  });

  return (
    <div>
      <CategoryHeader category={category} />
      <PostList posts={posts} />
    </div>
  );
}
