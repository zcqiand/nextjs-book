// app/login/page.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/dashboard';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    });

    if (response.ok) {
      // 登录成功，跳转到原始页面
      router.push(redirect);
    } else {
      // 显示错误
      alert('登录失败，请检查邮箱和密码');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 登录表单字段 */}
    </form>
  );
}