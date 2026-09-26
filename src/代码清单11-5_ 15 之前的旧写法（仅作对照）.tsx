// 15 之前的旧写法（仅作对照，不要在新项目中使用）
export default function TaskPage({
  params,
}: {
  params: { taskId: string };
}) {
  const { taskId } = params;
  return <h1>任务: {taskId}</h1>;
}