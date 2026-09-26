// app/page.tsx — 这是一个 Server Component
export default async function HomePage() {
  // 直接在服务端获取数据，无需 useEffect，无需 useState
  const tasks = await fetchTasks();
  return (
    <main>
      <h1>taskflow-board</h1>
      {tasks.map(task => (
        <article key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </article>
      ))}
    </main>
  );
}