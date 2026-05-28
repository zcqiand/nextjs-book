// 从第 32 章提取
// 代码清单: createUser 函数
// 文件名: chapter32_createUser.tsx
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

export async function createUser(data: unknown) {
  const result = UserSchema.safeParse(data);

  if (!result.success) {
    // 返回格式化的错误信息
    return {
      success: false,
      errors: result.error.errors.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      })),
    };
  }

  // 验证通过，继续创建用户
  const user = await db.user.create({ data: result.data });
  return { success: true, user };
}
