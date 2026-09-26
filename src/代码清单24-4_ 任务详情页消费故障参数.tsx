import { notFound } from 'next/navigation'
import { fetchTask } from '@/lib/tasks'

// 截至 Next.js 15.x：params 与 searchParams 均为 Promise，
// 直接当普通对象解构，拿到的是 Promise 本身而非参数值
export default async function TaskDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ taskId: string }>
  searchParams: Promise<{ fault?: string }>
}) {
  const { taskId } = await params
  const { fault } = await searchParams

  const task = await fetchTask(taskId, fault)

  // 找不到时按「资源不存在」处理，交给 notFound() 渲染 404 UI
  // （沿用第 5/6 章建立的 not-found 机制，此处直接复用不展开）
  if (task === null) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-bold text-slate-900">{task.title}</h1>
      <span className="mt-4 inline-block rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-700">
        {task.status}
      </span>
    </main>
  )
}