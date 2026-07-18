// 模拟数据库查询
async function getAllPostSlugs() {
  // 在真实项目中，这里会是数据库查询
  const posts = await db.post.findMany({
    select: { slug: true },
  });
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs;
}