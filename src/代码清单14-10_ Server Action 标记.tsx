// app/actions/comments.ts
'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { z } from 'zod';

const CommentSchema = z.object({
  postSlug: z.string(),
  author: z.string().min(2, '用户名至少需要2个字符'),
  content: z.string().min(5, '评论至少需要5个字符'),
});

// 模拟数据库存储
const comments: {
  id: string;
  postSlug: string;
  author: string;
  content: string;
  createdAt: Date;
}[] = [];

export async function addComment(formData: FormData) {
  const rawData = {
    postSlug: formData.get('postSlug'),
    author: formData.get('author'),
    content: formData.get('content'),
  };

  const result = CommentSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  // 保存评论
  const newComment = {
    id: Math.random().toString(36).substring(7),
    postSlug: result.data.postSlug,
    author: result.data.author,
    content: result.data.content,
    createdAt: new Date(),
  };

  comments.push(newComment);

  // 清除该文章页面的缓存，确保新评论立即显示
  revalidatePath(`/blog/${result.data.postSlug}`);

  return { success: true };
}

export async function getComments(postSlug: string) {
  // 模拟从数据库获取评论
  return comments.filter((c) => c.postSlug === postSlug);
}