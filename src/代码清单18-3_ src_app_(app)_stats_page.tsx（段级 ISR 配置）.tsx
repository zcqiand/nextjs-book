import { getTasks } from '@/lib/task-service';

// 段级 ISR：本页声明 60 秒保鲜期。构建时预渲染一次，60 秒内的请求直接返回静态成品；
// 过期后的第一个请求先拿到旧成品、框架在后台重新渲染，之后的请求拿到新成品，
// 这就是「先给旧的、后台换新」的增量静态再生
export const revalidate = 60;

export default async function StatsPage() {
  // 构建期本页会被预渲染，此刻生产服务器尚未启动、fetch 必然失败：
  // 用 try/catch 给兜底值，把「构建期取不到数据」从构建报错降级成可运行的演示
  let doneCount = 0;
  try {
    const tasks = await getTasks();
    doneCount = tasks.filter((task) => task.status === 'done').length;
  } catch {
    doneCount = 0;
  }

  return (
    <main className="mx-auto max-w-3xl space-y-4 p-6">
      <h1 className="text-2xl font-bold">团队统计</h1>
      <p>已完成任务：{doneCount} 条</p>
      {/* 数据变化频率低到写失效代码不划算时，交给这个 60 秒的定时兜底即可 */}
    </main>
  );
}