'use client';

import { useRouter } from 'next/navigation';

export default function DeleteTaskButton({ taskId }: { taskId: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm('确定要删除这个任务吗？')) {
      return;
    }

    await fetch(`/api/tasks/${taskId}`, { method: 'DELETE' });

    // 删除后返回列表，使用 replace
    router.replace('/tasks');
  };

  return <button onClick={handleDelete}>删除</button>;
}