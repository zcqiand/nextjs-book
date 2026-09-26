"use client";

// 这是反例，不要照写：客户端组件的渲染阶段不支持 async 组件，
// 'use client' 与顶部的 async 组合构建能通过，访问 /boards 渲染时才报错。
import { fetchTasks } from "@/lib/data";

export default async function BoardsPage() {
  // 这一行 await 就是报错源头：加了这个指令后，组件会被搬进浏览器执行，
  // 而浏览器端渲染阶段拿不到 await 能力，构建不会拦住你，一渲染就报错。
  const tasks = await fetchTasks();

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, marginBottom: 16 }}>任务看板</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              padding: "12px 16px",
              marginBottom: 8,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{task.title}</span>
            <span style={{ color: "#6b7280" }}>{task.status}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}