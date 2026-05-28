// 从第 17 章提取
// 代码清单: Server Action 标记
// 文件名: chapter17_createUser.tsx
// src/app/actions/auth.ts
'use server';

import { hash } from 'bcryptjs';
import { db } from '@/lib/db';
import { z } from 'zod';

const RegisterSchema = z.object({
  name: z.string().min(2, '用户名至少需要2个字符'),
  email: z.string().email('请输入有效的邮箱地址'),
  password: z.string().min(8, '密码至少需要8个字符'),
});

export async function createUser(formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const result = RegisterSchema.safeParse(rawData);

  if (!result.success) {
    return { error: '输入格式不正确' };
  }

  const { name, email, password } = result.data;

  // 检查邮箱是否已存在
  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: '该邮箱已被注册' };
  }

  // 加密密码
  const hashedPassword = await hash(password, 12);

  // 创建用户
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: true };
}
