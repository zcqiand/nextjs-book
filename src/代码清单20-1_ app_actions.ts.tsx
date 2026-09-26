'use server';

// 文件级 'use server'：写在文件第一行，该文件所有导出的 async 函数都成为 Server Action。
// 客户端与表单拿到的只是函数「引用」，函数体永远在服务端执行。
// 用 FormData 接参是表单动作的惯例口径：JS 禁用走原生提交时，浏览器只会提交表单字段本身，FormData 正好原样承接
export async function submitFeedback(formData: FormData) {
  const message = String(formData.get('message') ?? '');
  if (message.trim().length === 0) {
    // 空内容直接返回：不做无意义的处理，也不向客户端泄露任何内部信息
    return;
  }
  // 演示用内存动作：真实项目里这一行通常换成写库、发通知或记日志
  console.log('[feedback]', message);
}