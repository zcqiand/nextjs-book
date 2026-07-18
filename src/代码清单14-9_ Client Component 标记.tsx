// app/contact/form.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { submitContactForm } from '@/app/actions';

interface FormErrors {
  name?: string[];
  email?: string[];
  message?: string[];
}

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const result = await submitContactForm(formData);

    if (!result.success && result.errors) {
      setErrors(result.errors);
      return;
    }

    if (result.success) {
      setSuccess(true);
      formRef.current?.reset();
    }
  }

  if (success) {
    return (
      <div style={{
        padding: '2rem',
        backgroundColor: '#e8f5e9',
        borderRadius: '8px',
        textAlign: 'center',
      }}>
        <h3 style={{ color: '#2e7d32', marginBottom: '0.5rem' }}>
          提交成功！
        </h3>
        <p style={{ color: '#666' }}>
          我们已经收到你的留言，会尽快回复。
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">姓名</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />
        {errors.name && (
          <span style={{ color: '#c62828', fontSize: '0.875rem' }}>
            {errors.name[0]}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="email">邮箱</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />
        {errors.email && (
          <span style={{ color: '#c62828', fontSize: '0.875rem' }}>
            {errors.email[0]}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="message">留言</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
        />
        {errors.message && (
          <span style={{ color: '#c62828', fontSize: '0.875rem' }}>
            {errors.message[0]}
          </span>
        )}
      </div>

      <button type="submit">提交</button>
    </form>
  );
}