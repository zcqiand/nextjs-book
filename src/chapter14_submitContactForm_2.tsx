// 从第 14 章提取
// 代码清单: Server Action 标记
// 文件名: chapter14_submitContactForm_2.tsx
// app/actions.ts
'use server';

import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(2, '姓名至少需要2个字符'),
  email: z.string().email('请输入有效的邮箱地址'),
  message: z.string().min(10, '留言至少需要10个字符'),
});

export async function submitContactForm(formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  // 验证数据
  const result = ContactSchema.safeParse(rawData);

  if (!result.success) {
    // 返回验证错误
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  // 验证通过，保存数据
  await saveToDatabase(result.data);

  return { success: true };
}
