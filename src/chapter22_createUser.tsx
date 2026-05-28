// 从第 22 章提取
// 代码清单: Server Action 标记
// 文件名: chapter22_createUser.tsx
// 使用泛型确保输入输出类型安全
'use server';

import { z } from 'zod';

const UserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(0).optional(),
});

type UserInput = z.infer<typeof UserSchema>;
type UserOutput = UserInput & { id: string; createdAt: Date };

export async function createUser(
  input: UserInput
): Promise<{ success: true; data: UserOutput } | { success: false; error: string }> {
  try {
    const validated = UserSchema.parse(input);

    // 创建用户逻辑
    const user = await db.user.create({
      data: {
        ...validated,
        id: generateId(),
        createdAt: new Date(),
      },
    });

    return { success: true, data: user as UserOutput };
  } catch (error) {
    return { success: false, error: String(error) };
  }
}
