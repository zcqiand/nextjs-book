// App Router 的数据获取方式
// 数据获取直接写在组件内部
export default async function TaskListPage() {
  // 直接在组件内部获取数据，不需要额外的函数
  const tasks = await fetchTasks();

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}