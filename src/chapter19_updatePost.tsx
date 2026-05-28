// 从第 19 章提取
// 代码清单: 在 Server Action 中更新数据时清除相关缓存
// 文件名: chapter19_updatePost.tsx
// 在 Server Action 中更新数据时清除相关缓存
export async function updatePost(postId: string, data: PostUpdate) {
  const updated = await db.post.update({
    where: { id: postId },
    data,
  });

  // 清除所有相关缓存标签
  revalidateTag('posts');
  revalidateTag(`post-${postId}`);
  revalidateTag('homepage');

  return updated;
}
