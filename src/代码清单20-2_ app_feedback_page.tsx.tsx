import { submitFeedback } from '@/app/actions';

// 没有 'use client'：表单是纯展示，留在 Server Component 里渲染。
// <form action> 接收 Server Action 的引用，提交行为由框架接管
export default function FeedbackPage() {
  return (
    <form action={submitFeedback}>
      <input type="text" name="message" placeholder="写下你的反馈" />
      <button type="submit">提交</button>
    </form>
  );
}