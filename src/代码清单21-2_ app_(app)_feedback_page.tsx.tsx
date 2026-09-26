import { FeedbackForm } from './feedback-form';

export default function FeedbackPage() {
  return (
    <div style={{ maxWidth: 560, margin: '0 auto', padding: 16 }}>
      <h1 style={{ fontSize: 20, margin: '0 0 8px' }}>反馈与联系</h1>
      <p style={{ color: '#6b7280', fontSize: 14, margin: '0 0 16px' }}>
        使用中遇到问题，或者有功能建议，欢迎留言。
      </p>
      {/* 页面只负责外壳：<Form> 元素在 FeedbackForm（客户端组件）内部渲染，
          action 由 useActionState 的派发函数担任，见清单 21-4 */}
      <FeedbackForm />
    </div>
  );
}