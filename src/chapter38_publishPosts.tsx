// 从第 38 章提取
// 代码清单: publishPosts 函数
// 文件名: chapter38_publishPosts.tsx
export async function publishPosts(postIds: string[]) {
  const result = await db.post.updateMany({
    where: { id: { in: postIds } },
    data: { published: true, publishedAt: new Date() },
  });

  revalidateTag('posts');
  revalidateTag('homepage');

  return { success: true, updatedCount: result.count };
}

export async function movePosts(postIds: string[], targetCategoryId: string) {
  const result = await db.post.updateMany({
    where: { id: { in: postIds } },
    data: { categoryId: targetCategoryId },
  });

  revalidateTag('posts');

  return { success: true, updatedCount: result.count };
}
