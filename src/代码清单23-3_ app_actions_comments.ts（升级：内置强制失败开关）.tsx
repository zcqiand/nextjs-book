'use server';
// 升级点：createCommentAction 内置一个仅演示用的强制失败开关，模拟服务端写入失败，
// 失败沿 createComment 的 error 通道抛出，让客户端回滚由真实错误驱动。

import { revalidatePath } from 'next/cache';

export async function createCommentAction(taskId: string, formData: FormData) {
  const rawContent = formData.get('content');
  const content = typeof rawContent === 'string' ? rawContent.trim() : '';
  const rawAuthor = formData.get('author');
  const author =
    typeof rawAuthor === 'string' && rawAuthor.trim() ? rawAuthor.trim() : '匿名成员';

  if (!content) {
    throw new Error('评论内容不能为空');
  }

  formData.set('taskId', taskId);
  formData.set('author', author);

  // 仅演示用：内容包含 [fail] 时模拟服务端写入失败，直接构造失败结果；真实项目删除本段
  const result = content.includes('[fail]')
    ? { success: false, error: '评论服务暂不可用，请稍后重试' }
    : await createComment(formData);

  if (!result.success) {
    // error 通道：写入失败转成异常抛出，客户端 catch 后亮横幅；乐观回滚由 useOptimistic 自动完成
    throw new Error(result.error ?? '评论写入失败');
  }

  revalidatePath('/tasks/' + taskId);
}