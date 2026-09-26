'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function CreateTaskForm() {
  const router = useRouter();
  const [title, setTitle] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!title.trim()) {
      alert('请输入任务标题');
      return;
    }

    const response = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({ title }),
    });

    if (response.ok) {
      // 创建成功后跳回任务列表
      router.push('/tasks');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="输入任务标题"
      />
      <button type="submit">创建任务</button>
    </form>
  );
}