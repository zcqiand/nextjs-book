// 模拟数据库查询
async function getAllTaskIds() {
  // 在真实项目中，这里会是数据库查询
  const tasks = await db.task.findMany({
    select: { id: true },
  });
  return tasks.map((task) => ({ taskId: task.id }));
}

export async function generateStaticParams() {
  const taskIds = await getAllTaskIds();
  return taskIds;
}