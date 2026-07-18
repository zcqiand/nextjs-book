// app/actions.ts
'use server';

import { auth } from '@/lib/auth';

export async function deletePost(postId: string) {
  const session = await auth();

  if (!session?.user) {
    return { success: false, error: '请先登录' };
  }

  // 检查用户权限
  if (session.user.role !== 'admin') {
    return { success: false, error: '权限不足' };
  }

  // 执行删除操作
  await db.post.delete({ where: { id: postId } });

  revalidatePath('/blog');
  return { success: true };
}