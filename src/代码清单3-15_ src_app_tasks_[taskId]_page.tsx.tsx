// src/app/tasks/[taskId]/page.tsx
export default function TaskDetailPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>任务详情页面</h1>
      <p>这个页面可以匹配 /tasks/任意-id</p>
      <p>例如：/tasks/42、/tasks/1088 等</p>
    </main>
  );
}