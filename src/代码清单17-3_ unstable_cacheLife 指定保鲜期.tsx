import { unstable_cacheLife } from 'next/cache';

// 15.x 中该 API 带 unstable_ 前缀（与实验状态对应），后续版本更名为 cacheLife
export async function getHotTasks() {
  'use cache';
  // 换到 hours 档：5 分钟内直接用缓存，之后后台再生成，1 天强制过期（各档数值见表 17-2）
  unstable_cacheLife('hours');
  const response = await fetch('https://api.example.com/tasks/hot');
  return response.json();
}