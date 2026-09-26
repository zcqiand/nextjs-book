'use client';

import { useEffect, useState } from 'react';
// TaskStatus 要到 19.3 的改造才会从 lib/data.ts 导出，按 19.4 的步骤顺序操作即可通过编译
import type { Task, TaskStatus } from '@/lib/data';

const STATUS_OPTIONS: { value: TaskStatus; label: string }[] = [
  { value: 'todo', label: '待办' },
  { value: 'in-progress', label: '进行中' },
  { value: 'done', label: '已完成' },
];

export default function TaskFilter() {
  const [status, setStatus] = useState<TaskStatus>('todo');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // AbortController 用于在筛选值连续变化时取消上一次未完成的请求，
    // 防止较慢的旧响应后到，覆盖新筛选条件下的结果
    const controller = new AbortController();

    async function loadFilteredTasks() {
      setIsLoading(true);
      setErrorMessage(null);
      try {
        const response = await fetch(`/api/tasks?status=${status}`, {
          signal: controller.signal,
        });
        // 服务端返回 4xx/5xx 时 fetch 本身不会抛错，必须手动检查后转入错误态
        if (!response.ok) {
          throw new Error(`筛选请求失败：${response.status}`);
        }
        const data: Task[] = await response.json();
        setTasks(data);
      } catch (error) {
        // 切换筛选或组件卸载触发的请求中止属于预期行为，静默忽略即可
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }
        setErrorMessage(error instanceof Error ? error.message : '未知错误，请稍后重试');
      } finally {
        setIsLoading(false);
      }
    }

    loadFilteredTasks();
    return () => controller.abort();
  }, [status]);

  return (
    <section>
      <label htmlFor="task-status-filter">按状态筛选</label>
      <select
        id="task-status-filter"
        value={status}
        onChange={(event) => setStatus(event.target.value as TaskStatus)}
      >
        {STATUS_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {isLoading && <p>加载中…</p>}
      {errorMessage && <p role="alert">{errorMessage}</p>}
      {!isLoading && !errorMessage && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </section>
  );
}