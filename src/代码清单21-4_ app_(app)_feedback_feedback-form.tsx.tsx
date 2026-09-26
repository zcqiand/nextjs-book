'use client';
// 客户端组件的职责边界：渲染 <Form> 表单骨架，接住 Server Action 的返回值，
// 把错误文案渲染到对应字段下方，并在提交期间禁用按钮。

import { Form } from 'next/form';
import { useActionState } from 'react';
import { submitFeedback, type FeedbackState } from '@/app/actions/feedback';

const initialFeedbackState: FeedbackState = {
  success: false,
  message: '',
  errors: {},
};

const styles: Record<string, React.CSSProperties> = {
  field: { marginBottom: 12 },
  label: { display: 'block', fontSize: 14, marginBottom: 4 },
  input: { width: '100%', padding: '8px 10px', borderRadius: 8, border: '1px solid #d1d5db', fontSize: 14, boxSizing: 'border-box' },
  error: { color: '#dc2626', fontSize: 12, margin: '4px 0 0' },
  success: { color: '#16a34a', fontSize: 14, margin: '0 0 12px' },
  button: { padding: '10px 24px', borderRadius: 8, border: 'none', background: '#2563eb', color: '#fff', fontSize: 14, cursor: 'pointer' },
};

export default function FeedbackForm() {
  // React 19 的 useActionState 返回三元组：state 是 Server Action 的最新返回值，
  // formAction 是派发函数，提交后把返回值写入 state 驱动回显，
  // pending 在执行期间为 true，用它禁用按钮防止重复提交
  const [state, formAction, pending] = useActionState(submitFeedback, initialFeedbackState);

  // action 绑派发函数 formAction：由它把上一次 state 注入 submitFeedback，
  // 返回值经 useActionState 回到本组件；截至 Next.js 15.x，<Form> 对函数 action 全系支持
  return (
    <Form action={formAction}>
      <div style={styles.field}>
        <label htmlFor="name" style={styles.label}>姓名</label>
        <input id="name" name="name" style={styles.input} />
        {state.errors.name?.[0] && <p style={styles.error}>{state.errors.name[0]}</p>}
      </div>
      {/* 邮箱刻意用 type="text"：type="email" 会触发浏览器原生格式校验，
          坏邮箱在提交前就被拦下，演示不到服务端 Zod 的错误回显 */}
      <div style={styles.field}>
        <label htmlFor="email" style={styles.label}>邮箱</label>
        <input id="email" name="email" type="text" style={styles.input} />
        {state.errors.email?.[0] && <p style={styles.error}>{state.errors.email[0]}</p>}
      </div>
      <div style={styles.field}>
        <label htmlFor="message" style={styles.label}>反馈内容</label>
        <textarea id="message" name="message" rows={5} style={styles.input} />
        {state.errors.message?.[0] && <p style={styles.error}>{state.errors.message[0]}</p>}
      </div>
      {state.success && state.message && <p style={styles.success}>{state.message}</p>}
      <button type="submit" disabled={pending} style={styles.button}>
        {pending ? '提交中……' : '提交反馈'}
      </button>
    </Form>
  );
}