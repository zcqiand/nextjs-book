// 从第 38 章提取
// 代码清单: submitComment 函数
// 文件名: chapter38_submitComment.tsx
import { z } from 'zod';

export async function submitComment(formData: FormData) {
  const schema = z.object({
    postId: z.string().uuid(),
    content: z.string()
      .min(1, '评论内容不能为空')
      .max(2000, '评论内容不能超过 2000 字'),
    parentId: z.string().uuid().optional(),
  });

  const result = schema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  // 业务逻辑
  const comment = await db.comment.create({
    data: result.data,
  });

  return { success: true, comment };
}
