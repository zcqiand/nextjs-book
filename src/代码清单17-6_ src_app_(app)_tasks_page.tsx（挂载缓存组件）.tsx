import TaskCategoryList from '@/components/task-category-list';

// 页面保持第 16 章的 force-dynamic：整页每次请求都重新渲染。
// 页面本身不取数：TaskCategoryList 是全页唯一的取数点，日志信标只会因它而响。
// 若它每次请求都能命中缓存，即证明组件级缓存独立于整页缓存，这是刻意的对照设计
export const dynamic = 'force-dynamic';

export default async function TasksPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-4 p-6">
      <h1 className="text-2xl font-bold">团队任务看板</h1>
      <TaskCategoryList />
    </main>
  );
}