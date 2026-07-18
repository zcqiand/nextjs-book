'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function NewsletterForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // 验证邮箱格式
    if (!email.includes('@')) {
      alert('请输入有效的邮箱地址');
      return;
    }

    // 提交数据
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      // 成功后跳转到订阅成功页面
      router.push('/newsletter/subscribed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="输入你的邮箱"
      />
      <button type="submit">订阅</button>
    </form>
  );
}