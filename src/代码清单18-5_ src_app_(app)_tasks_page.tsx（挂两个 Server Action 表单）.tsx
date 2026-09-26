import { completeTask, renameTask } from '@/lib/task-actions';
import { getTasks, type Task } from '@/lib/task-service';

// 沿用第 16 章的 force-dynamic：页面每次请求都重新渲染，
// 这样本章两条失效路径的日志签名才不会与整页缓存的表现混在一起
export const dynamic = 'force-dynamic';

const STATUS_META: Record<Task['status'], { label: string; badge: string }> = {
  todo: { label: '待办', badge: 'bg-gray-100 text-gray-700' },
  doing: { label: '进行中', badge: 'bg-blue-100 text-blue-700' },
  done: { label: '已完成', badge: 'bg-green-100 text-green-700' },
};

export default async function TasksPage() {
  const tasks = await getTasks();
  return (
    <main className="mx-auto max-w-3xl space-y-4 p-6">
      <h1 className="text-2xl font-bold">团队任务看板</h1>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id} className="space-y-2 rounded-lg border p-4">
            <div>
              <span className="font-medium">{task.title}</span>
              <span
                className={`ml-3 rounded-full px-2 py-0.5 text-xs ${STATUS_META[task.status].badge}`}
              >
                {STATUS_META[task.status].label}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {/* 表单的 action 直接接 Server Action：提交即触发失效，无需自建接口转发层 */}
              <form action={renameTask} className="flex items-center gap-2">
                <input type="hidden" name="taskId" value={task.id} />
                <input
                  type="text"
                  name="newTitle"
                  defaultValue={task.title}
                  aria-label={`任务 ${task.id} 的新名称`}
                  className="w-40 rounded border px-2 py-1 text-sm"
                />
                <button
                  type="submit"
                  className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
                >
                  改名（revalidatePath）
                </button>
              </form>
              {task.status !== 'done' && (
                <form action={completeTask}>
                  <input type="hidden" name="taskId" value={task.id} />
                  <button
                    type="submit"
                    className="rounded bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700"
                  >
                    完成（revalidateTag）
                  </button>
                </form>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}