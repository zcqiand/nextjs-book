// 从第 6 章提取
// 代码清单: Client Component 标记
// 文件名: chapter06_ContactPage.tsx
'use client';

// src/app/contact/page.tsx
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    // 模拟提交
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    router.push('/contact/success');
  };

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>联系我们</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* 表单内容 */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: isSubmitting ? '#ccc' : '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: isSubmitting ? 'not-allowed' : 'pointer'
          }}
        >
          {isSubmitting ? '提交中...' : '提交'}
        </button>
      </form>
    </main>
  );
}
