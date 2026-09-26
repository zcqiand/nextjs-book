// lib/data.ts 本章用到的数据函数签名提示（内存实现此前章节已建立，本章零改动沿用）：
//
//   export type Task = {
//     id: string;
//     title: string;
//     status: 'todo' | 'in-progress' | 'done';
//     assigneeId: string;
//     updatedAt: string; // ISO 8601 字符串
//   };
//   export async function fetchTasks(): Promise<Task[]>
//   export async function getTaskById(id: string): Promise<Task | undefined>

import { NextResponse } from 'next/server';
import { fetchTasks } from '@/lib/data';

// route.ts 的核心约定：导出与 HTTP 方法同名的 async 函数，
// 框架自动把对应方法的请求路由到这个函数，方法名之外的导出不会被当作端点
export async function GET() {
  const tasks = await fetchTasks();
  // NextResponse.json 一行完成「序列化 + 设置 Content-Type 响应头」，
  // 状态码缺省为 200，这个便捷方法在 22.3.2 展开
  return NextResponse.json(tasks);
}