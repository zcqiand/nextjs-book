// app/tasks/[id]/page.tsx
export default async function TaskDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  // params 是 Promise，await 解包后拿到动态参数（来自文件夹名 [id]）
  const { id } = await params;

  // searchParams 同样是 Promise；?status=todo 时得到 { status: 'todo' }
  const { status } = await searchParams;

  return (
    <main>
      <h1>任务: {id}</h1>
      {status && <p>当前状态: {status}</p>}
    </main>
  );
}