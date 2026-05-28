// 从第 6 章提取
// 代码清单: Client Component 标记
// 文件名: chapter06_CheckoutButton.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function CheckoutButton() {
  const router = useRouter();

  const handleCheckout = () => {
    // 使用 replace，确保结账流程不会被用户误返回
    router.replace('/checkout/payment');
  };

  return (
    <button onClick={handleCheckout}>
      去结账
    </button>
  );
}
