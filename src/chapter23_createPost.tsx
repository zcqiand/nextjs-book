// 从第 23 章提取
// 代码清单: Server Action 标记
// 文件名: chapter23_createPost.tsx
// src/app/actions/posts.ts
'use server';

import { revalidateTag } from 'next/cache';
import { db } from '@/lib/db';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  if (!title || !content) {
    return { error: '标题和内容不能为空' };
  }

  const post = await db.post.create({
    data: { title, content },
  });

  revalidateTag('posts');
  return { success: true, post };
}
