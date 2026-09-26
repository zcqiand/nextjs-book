'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // submitForm 为示意占位，提交表单数据
    await submitForm(new FormData(event.target));

    // 提交成功后跳转到成功页面
    router.push('/contact/success');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 表单字段 */}
      <button type="submit">提交</button>
    </form>
  );
}