// 从第 14 章提取
// 代码清单: Server Action 标记
// 文件名: chapter14_submitContactForm.tsx
// app/actions.ts
'use server';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // 验证数据
  if (!name || !email || !message) {
    return { success: false, error: '请填写所有字段' };
  }

  // 发送邮件或保存到数据库
  await sendEmail({
    name: name as string,
    email: email as string,
    message: message as string,
  });

  return { success: true };
}
