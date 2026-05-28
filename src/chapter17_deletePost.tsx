// 从第 17 章提取
// 代码清单: Server Action 标记
// 文件名: chapter17_deletePost.tsx
// src/app/actions/posts.ts
'use server';

import { auth } from '@/lib/auth';
import { db } from '@/lib/db';
import { revalidateTag } from 'next/cache';
import { canDeletePost } from '@/lib/permissions';

export async function deletePost(postId: string) {
  const session = await auth();

  if (!session) {
    return { error: '请先登录' };
  }

  if (!canDeletePost(session.user.role as Role)) {
    return { error: '权限不足' };
  }

  await db.post.delete({
    where: { id: postId },
  });

  revalidateTag('posts');
  return { success: true };
}
