// 不开实验开关的等价方案：回到第 16 章的 fetch cache 口径。
// 组件函数体每次渲染照跑，但 getTasks 内的 fetch 带 next: { revalidate: 30 }，
// 30 秒窗口内重复渲染不再发网络请求（日志签名：[task-service] 在、[route] 消失）
import { getTasks } from '@/lib/task-service';

export default async function TaskCategoryList() {
  const tasks = await getTasks();
  // 分组计数的渲染部分与清单 17-5 完全一致，此处省略
}