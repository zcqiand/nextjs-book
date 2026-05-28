// 从第 32 章提取
// 代码清单: Server Action 标记
// 文件名: chapter32_createPost.tsx
// src/app/actions/posts.ts
'use server';

import { revalidateTag } from 'next/cache';
import { db } from '@/lib/db';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  // 调试：输入验证
  console.log('createPost called:', { title, content });

  try {
    const post = await db.post.create({
      data: { title, content },
    });

    // 调试：成功响应
    console.log('Post created:', post.id);

    revalidateTag('posts');
    return { success: true, post };
  } catch (error) {
    // 调试：错误详情
    console.error('createPost error:', error);
    return { error: 'Failed to create post' };
  }
}
