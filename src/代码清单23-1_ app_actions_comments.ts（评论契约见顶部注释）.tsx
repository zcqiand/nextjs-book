// 评论模块契约摘要（Comment 与 fetchComments 在 lib/data.ts，createComment 在本文件；
// 完整实现见第 20 章 20.4 节，本章零改动沿用）：
//
//   export type Comment = { id: string; taskId: string; author: string; content: string; createdAt: string };
//
//   export async function fetchComments(taskId: string): Promise<Comment[]>
//   export async function createComment(
//     formData: FormData,
//   ): Promise<{ success: boolean; error?: string }>  // 失败时 success=false，error 携带用户可读文案

'use server';
// 'use server' 指令必须先于文件内一切语句（上方只是注释，不算语句），
// 此后文件内导出的每个 async 函数都会成为一个可从客户端调用的服务端端点。

import { revalidatePath } from 'next/cache';

export async function createCommentAction(taskId: string, formData: FormData) {
  // FormData 的字段值类型是 FormDataEntryValue | null，先收窄到 string 再处理
  const rawContent = formData.get('content');
  const content = typeof rawContent === 'string' ? rawContent.trim() : '';
  const rawAuthor = formData.get('author');
  const author =
    typeof rawAuthor === 'string' && rawAuthor.trim() ? rawAuthor.trim() : '匿名成员';

  // 校验放在服务端的原因：客户端校验只是体验优化，可被直接调用绕过；
  // Server Action 是公网可达的端点，入参必须由服务端自己兜底
  if (!content) {
    throw new Error('评论内容不能为空');
  }

  // createComment 按第 20 章定稿收 FormData：补上 taskId、兜底后的 author，再整体转交
  formData.set('taskId', taskId);
  formData.set('author', author);
  const result = await createComment(formData);
  if (!result.success) {
    // error 通道：写入失败转成异常抛出，客户端 catch 后亮横幅；乐观回滚由 useOptimistic 自动完成
    throw new Error(result.error ?? '评论写入失败');
  }

  // 服务端写入完成后对任务详情页做 revalidate，让确认后的列表以真实数据为准。
  // 本章传具体路径 /tasks/${taskId} 即可生效；模板串形式（'page' 类型参数，写法形如
  // revalidatePath('/blog/[slug]', 'page')）亦受支持，见 Next.js 官方文档（截至 Next.js 15.x）
  revalidatePath('/tasks/' + taskId);
}