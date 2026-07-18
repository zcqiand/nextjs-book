// src/app/actions/posts.ts
'use server';

import { revalidateTag } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;

  // 创建文章
  await db.post.create({ data: { title } });

  // 清除所有带有 'posts' 标签的缓存
  revalidateTag('posts');

  return { success: true };
}