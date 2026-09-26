// 本章示意数据层：内存数组只是教学占位，与后续章节的案例仓真实数据层无关
interface Task {
  id: string
  title: string
  status: 'todo' | 'doing' | 'done'
}

const tasks: Task[] = [
  { id: 't1', title: '设计看板拖拽交互', status: 'doing' },
  { id: 't2', title: '编写任务详情页样式', status: 'todo' },
  // 无权限任务：演练「确定性业务失败」场景，它的抛错每次访问都会复现
  { id: 'secret-task', title: '机密：薪酬调整方案', status: 'done' },
]

export async function fetchTask(
  taskId: string,
  fault?: string
): Promise<Task | null> {
  // 把故障注入放在数据层参数上：改一个 URL 查询参数就能触发，
  // 不改代码、不重启服务，四个演练场景随时切换
  if (fault === 'slow') {
    await new Promise((resolve) => setTimeout(resolve, 3000))
  }
  if (fault === 'throw') {
    throw new Error('数据源连接失败（故障注入）')
  }
  if (taskId === 'secret-task') {
    throw new Error('无权访问该任务（403）')
  }
  return tasks.find((task) => task.id === taskId) ?? null
}