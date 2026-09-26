import { getRecentActivities } from '@/lib/activity-service';
export function ActivityFeedSkeleton() {
  return (
    <section className="mt-8 space-y-2">
      <div className="h-6 w-28 animate-pulse rounded bg-gray-200" />
      {[0, 1, 2].map((i) => (
        <div key={i} className="h-5 w-3/4 animate-pulse rounded bg-gray-100" />
      ))}
    </section>
  );
}
// async 服务端组件（无 hooks）：被 Suspense 包裹后，自身 2.5s 的 pending 不再拖住整页；骨架形状对应上方条目
export default async function ActivityFeed() {
  const activities = await getRecentActivities();
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold">最近动态</h2>
      <ul className="space-y-2 text-sm text-gray-700">
        {activities.map((item) => (
          <li key={item.id}>{item.actor} {item.action}「{item.taskTitle}」</li>
        ))}
      </ul>
    </section>
  );
}