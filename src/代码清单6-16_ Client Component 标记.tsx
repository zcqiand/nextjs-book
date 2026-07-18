'use client';

import { useRouter } from 'next/navigation';

export default function DeleteButton({ itemId }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm('确定要删除这个项目吗？')) {
      return;
    }

    await fetch(`/api/items/${itemId}`, { method: 'DELETE' });

    // 删除后返回，使用 replace 而不是 push
    // 这样用户点击返回不会回到确认删除的对话
    router.replace('/items');
  };

  return <button onClick={handleDelete}>删除</button>;
}