// pages/tasks/[taskId].tsx
// revalidate 写在 getStaticProps 的返回值里，ISR 才会生效
export async function getStaticProps({ params }) {
  const task = await fetchTask(params.taskId);
  return {
    props: { task },
    revalidate: 60, // 每 60 秒在后台重新生成该页面
  };
}

export default function TaskDetail({ task }) {
  return <h1>{task.title}</h1>;
}