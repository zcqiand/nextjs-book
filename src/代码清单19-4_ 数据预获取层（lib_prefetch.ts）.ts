// lib/prefetch.ts
// 预获取层：把「渲染期取数 + 请求内去重 + 延迟日志」收在一个入口，页面组件只负责 await

import { cache } from 'react';
import { after } from 'next/server';
import { fetchTasks, type Task, type TaskStatus } from './data';

// 为什么用 cache 再包一层：Request Memoization 复用的是同一次渲染内同 URL 的
// fetch 响应；cache 负责覆盖组件树重试、Suspense 回退等 fetch 层兜不住的场景，
// 让去重保证落在函数级别
export const getTasksForRender = cache(
  async (status?: TaskStatus): Promise<Task[]> => {
    const startedAt = Date.now();

    // 缓存时长不在这一层表态：revalidate 默认值仍由 lib/data.ts 统一决定，
    // 预获取层只管「何时取」与「请求内去重」，改缓存策略依然只改一处
    const tasks = await fetchTasks(status ? { status } : {});

    // after 把日志挪出关键路径：回调推迟到响应发送之后才执行，
    // 用户不会为这条耗时统计多等一毫秒（观察点：日志打印时响应已到达浏览器）
    after(() => {
      const elapsed = Date.now() - startedAt;
      console.log(
        `[prefetch] 任务取数完成 status=${status ?? 'all'} 耗时=${elapsed}ms`,
      );
    });

    return tasks;
  },
);