'use server';
// 文件第一行的 'use server' 声明：本文件所有导出函数都是 Server Action，
// 函数体只在服务端执行，浏览器提交表单时经由 RPC 调用，不会进入客户端代码包。

import { z } from 'zod';

// 校验规则集中在一处声明：验证逻辑放在服务端，绕过页面直接发请求也拦得住；
// 错误文案直接写中文，回显时无需再做一层映射
const feedbackSchema = z.object({
  name: z.string().trim().min(1, '姓名不能为空'),
  email: z.string().trim().email('邮箱格式不正确'),
  message: z.string().trim().min(10, '反馈内容至少 10 个字'),
});

// 成败两种返回共用一个类型：useActionState 要求把「上一次返回值」传回 action，
// 统一类型让客户端组件拿到结果后做一次判别即可
export type FeedbackState = {
  success: boolean;
  message: string;
  errors: Record<string, string[] | undefined>;
};

// 示意持久化用模块级内存数组：进程重启即清空，换来零外部依赖；
// 以后接数据库时只替换 push 这一段，action 对外签名不变
const feedbackStore: { id: number; name: string; email: string; message: string; createdAt: string }[] = [];
let nextFeedbackId = 1;

export async function submitFeedback(
  prevState: FeedbackState,
  formData: FormData
): Promise<FeedbackState> {
  // formData.get 的返回值可能是 File，先兜底成字符串再交给 schema 判别
  const parsed = feedbackSchema.safeParse({
    name: formData.get('name') ?? '',
    email: formData.get('email') ?? '',
    message: formData.get('message') ?? '',
  });

  // 用 safeParse 而非 parse：校验失败拿到结果对象而不是抛异常，
  // 错误得以按字段整理后回传表单，而不是整次请求变成 500
  if (!parsed.success) {
    return {
      success: false,
      message: '请检查表单中标红的字段',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  feedbackStore.push({ id: nextFeedbackId++, ...parsed.data, createdAt: new Date().toISOString() });

  return { success: true, message: '反馈已收到，感谢你的建议。', errors: {} };
}