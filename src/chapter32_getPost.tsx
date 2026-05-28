// 从第 32 章提取
// 代码清单: 设置断点
// 文件名: chapter32_getPost.tsx
// 设置断点
export async function getPost(id: string) {
  const post = await db.post.findUnique({  // ← 在这里设置断点
    where: { id },
  });

  if (!post) {
    return null;
  }

  return post;  // ← 或在这里设置断点
}
