'use server';

import { revalidatePath } from 'next/cache';
import { comments, getTaskById, type Comment } from '@/lib/data';

// 文件级 'use server'：本文件所有导出函数都是 Server Action。
// 签名定稿为「返回状态对象」：直接绑定表单时返回值暂不渲染，
// 留给第 21 章的 useActionState 消费，本章先把服务端校验立起来
export async function createComment(
  formData: FormData,
): Promise<{ success: boolean; error?: string }> {
  const taskId = String(formData.get('taskId') ?? '');
  const author = String(formData.get('author') ?? '');
  const content = String(formData.get('content') ?? '');

  // 服务端校验是唯一可信的校验：客户端的 required 属性可以被绕过。
  // 手写长度检查足够本章使用，schema 校验库的主题归第 21 章
  const task = await getTaskById(taskId);
  if (!task) {
    return { success: false, error: '任务不存在' };
  }
  if (author.trim().length < 2) {
    return { success: false, error: '署名至少 2 个字符' };
  }
  if (content.trim().length < 1) {
    return { success: false, error: '评论内容不能为空' };
  }

  const comment: Comment = {
    id: `c-${Date.now().toString(36)}`,
    taskId,
    author: author.trim(),
    content: content.trim(),
    createdAt: new Date().toISOString(),
  };
  comments.push(comment);

  // 失效任务详情页的缓存，下一次访问重新渲染出这条评论
  // （revalidatePath，失效口径与第 18 章一致，路径用真实路由）
  revalidatePath(`/tasks/${taskId}`);
  return { success: true };
}