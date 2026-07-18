// 使用 revalidateTag（精确）
export async function updatePost(postId: string, data: PostUpdate) {
  await db.post.update({ where: { id: postId }, data });

  // 只清除相关数据，不影响其他页面
  revalidateTag('posts');
  revalidateTag(`post:${postId}`);
}

// 使用 revalidatePath（粗粒度）
export async function deletePost(postId: string) {
  await db.post.delete({ where: { id: postId } });

  // 清除整个博客列表页和详情页
  revalidatePath('/blog');
  revalidatePath(`/blog/${postId}`);
}