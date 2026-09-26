'use server';
// 'use server' 必须是文件第一行：本文件所有导出函数都会成为 Server Action，
// 只在服务端执行，永远不会被打包进浏览器代码

import { revalidatePath, revalidateTag } from 'next/cache';

// 改名走 revalidatePath：改动只影响任务列表页自己，按路径失效最直接
export async function renameTask(formData: FormData): Promise<void> {
  const taskId = Number(formData.get('taskId'));
  const newTitle = String(formData.get('newTitle') ?? '').trim();
  // 表单值天然是字符串且可能为空：先校验再写数据，避免把空名字存进数据源
  if (!taskId || !newTitle) {
    throw new Error('改名失败：taskId 与非空的新任务名必填');
  }

  try {
    // Server Action 跑在服务端，fetch 本项目接口同样必须写完整地址（与第 16 章同一条规矩）
    const response = await fetch('http://localhost:3000/api/tasks', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: taskId, title: newTitle }),
    });
    // fetch 对非 2xx 状态码不抛错，必须显式检查，否则失败会被当成成功处理
    if (!response.ok) {
      throw new Error(`改名失败：HTTP ${response.status}`);
    }
    // 失效动作放在数据写成功之后：先改数据再撕缓存，顺序反了会把旧数据再缓存一轮
    revalidatePath('/tasks');
  } catch (error) {
    console.error('[task-action] renameTask 执行失败', error);
    throw error;
  }
}

// 完成任务走 revalidateTag：任务数据同时散在列表页与第 17 章的分类统计组件里，
// 按标签失效可一次打穿所有带 tasks 标签的缓存条目，不必逐条枚举路径
export async function completeTask(formData: FormData): Promise<void> {
  const taskId = Number(formData.get('taskId'));
  if (!taskId) {
    throw new Error('完成任务失败：taskId 必填');
  }

  try {
    const response = await fetch('http://localhost:3000/api/tasks', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: taskId, status: 'done' }),
    });
    if (!response.ok) {
      throw new Error(`完成任务失败：HTTP ${response.status}`);
    }
    // 按标签失效：所有声明了 tags: ['tasks'] 的 fetch 缓存条目一并打穿
    revalidateTag('tasks');
  } catch (error) {
    console.error('[task-action] completeTask 执行失败', error);
    throw error;
  }
}