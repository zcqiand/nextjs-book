import { submitFeedback } from '@/app/actions';

export default function FeedbackPage() {
  // 函数级 'use server'：写在函数体第一行，只有这一个函数成为 Server Action。
  // 适合「跟着页面走」的一次性动作，不必为它单独建文件
  async function submitAnonymous(formData: FormData) {
    'use server';
    const message = String(formData.get('message') ?? '');
    if (message.trim().length > 0) {
      console.log('[feedback/anonymous]', message);
    }
  }

  return (
    <form action={submitFeedback}>
      <input type="text" name="message" placeholder="写下你的反馈" />
      {/* 提交按钮的 formAction 可接收一个 Server Action，
          点击该按钮时以它顶替 <form> 上绑定的动作，函数同样收到整份 FormData */}
      <button type="submit" formAction={submitAnonymous}>匿名提交</button>
      <button type="submit">署名提交</button>
    </form>
  );
}