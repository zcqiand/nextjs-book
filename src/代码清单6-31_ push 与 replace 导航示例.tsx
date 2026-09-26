'use client';

import { useRouter } from 'next/navigation';

export default function Example() {
  const router = useRouter();

  const goToWelcome = () => {
    // 不保留历史记录
    router.replace('/welcome');
  };

  const goToSettings = () => {
    // 保留历史记录
    router.push('/settings');
  };

  return (
    <>
      <button onClick={goToWelcome}>进入欢迎页</button>
      <button onClick={goToSettings}>进入设置页</button>
    </>
  );
}