// Pages Router 的数据获取方式
// 数据获取函数在组件外部定义
export async function getStaticProps() {
  const tasks = await fetchTasks();
  return {
    props: { tasks },  // 通过 props 传递给组件
    revalidate: 60,    // ISR（增量静态再生，Incremental Static Regeneration）配置
  };
}

// 组件接收数据作为 props
export default function TaskListPage({ tasks }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}