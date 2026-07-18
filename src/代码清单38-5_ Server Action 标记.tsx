// src/app/actions/posts.ts
'use server';

import { db } from '@/lib/db';
import { revalidateTag } from 'next/cache';

export async function deletePosts(postIds: string[]) {
  try {
    await db.post.deleteMany({
      where: { id: { in: postIds } },
    });

    revalidateTag('posts');
    return { success: true, deletedCount: postIds.length };
  } catch (error) {
    return { success: false, error: '批量删除失败' };
  }
}

// src/app/actions/users.ts
'use server';

import { db } from '@/lib/db';
import { revalidateTag } from 'next/cache';

export async function deleteUsers(userIds: string[]) {
  // 批量操作带事务
  return await db.$transaction(async (tx) => {
    // 删除用户
    await tx.user.deleteMany({
      where: { id: { in: userIds } },
    });

    // 级联删除相关数据
    await tx.session.deleteMany({
      where: { userId: { in: userIds } },
    });

    revalidateTag('users');
    return { success: true, deletedCount: userIds.length };
  });
}