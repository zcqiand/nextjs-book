import { unstable_cacheTag } from 'next/cache';

export async function getTasksSnapshot() {
  'use cache';
  // 声明归属标签：之后 revalidateTag('tasks') 会打穿本条缓存（调用时机第 18 章展开）
  unstable_cacheTag('tasks');
  const response = await fetch('https://api.example.com/tasks');
  return response.json();
}

// 对照记忆：revalidateTag 在第 16 章就能同时打穿 Data Cache 与 Full Route Cache，
// 带同一标签的 use cache 结果也在被打穿之列