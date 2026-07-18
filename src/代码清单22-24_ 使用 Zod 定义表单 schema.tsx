// 使用 Zod 定义表单 schema
const ContactFormSchema = z.object({
  name: z.string().min(2, '姓名至少2个字符'),
  email: z.string().email('请输入有效的邮箱'),
  message: z.string().min(10, '消息至少10个字符'),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

// 在 Server Action 中使用
export async function submitContactForm(
  formData: FormData
): Promise<{ success: boolean; errors?: z.ZodError['errors'] }> {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  const result = ContactFormSchema.safeParse(rawData);

  if (!result.success) {
    return { success: false, errors: result.error.errors };
  }

  // 发送邮件等逻辑
  await sendContactEmail(result.data);

  return { success: true };
}