// src/app/actions/user.ts
'use server';

import { z } from 'zod';
import { db } from '@/lib/db';

const UserSchema = z.object({
  name: z.string()
    .min(2, '用户名至少2个字符')
    .max(50, '用户名最多50个字符')
    .regex(/^[a-zA-Z0-9_]+$/, '用户名只能包含字母、数字和下划线'),

  email: z.string()
    .email('请输入有效的邮箱地址')
    .max(255, '邮箱地址太长'),

  age: z.number()
    .min(0, '年龄不能为负数')
    .max(150, '年龄不合法')
    .optional(),

  website: z.string()
    .url('请输入有效的网址')
    .optional()
    .refine(
      (url) => !url || url.startsWith('https://'),
      '网站必须使用 HTTPS'
    ),
});

export async function createUser(formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    age: formData.get('age') ? Number(formData.get('age')) : undefined,
    website: formData.get('website'),
  };

  const result = UserSchema.safeParse(rawData);

  if (!result.success) {
    return { error: result.error.errors[0].message };
  }

  // 验证通过，继续处理
  const user = await db.user.create({ data: result.data });
  return { success: true, user };
}