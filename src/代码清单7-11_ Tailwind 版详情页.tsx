// src/app/tasks/[id]/page.tsx（tasks 数据与 notFound 逻辑不变）
  return (
    <main className="mx-auto max-w-[800px] px-4">
      <Link href="/tasks" className="text-blue-600 hover:underline">
        ← 返回任务列表
      </Link>

      <article className="mt-8">
        <h1 className="mb-2 text-3xl font-bold">{task.title}</h1>
        <p className="mb-8 text-gray-500">{task.status}</p>
        <div className="text-lg leading-[1.8]">{task.content}</div>
      </article>
    </main>
  );