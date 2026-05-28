// 从第 14 章提取
// 代码清单: Client Component 标记
// 文件名: chapter14_ContactForm.tsx
// app/contact/form.tsx
'use client';

import { submitContactForm } from '@/app/actions';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? '提交中...' : '提交'}
    </button>
  );
}

export function ContactForm() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // 可以在提交前做一些客户端验证
    const email = formData.get('email') as string;
    if (!email.includes('@')) {
      alert('请输入有效的邮箱地址');
      return;
    }

    await submitContactForm(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">姓名</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />
      </div>

      <div>
        <label htmlFor="email">邮箱</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />
      </div>

      <div>
        <label htmlFor="message">留言</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
        />
      </div>

      <SubmitButton />
    </form>
  );
}
