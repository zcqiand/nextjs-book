// 对于 /boards/design-refresh/tasks/101
export default async function Page({
  params,
}: {
  params: Promise<{ boardId: string; taskId: string }>;
}) {
  const { boardId, taskId } = await params;
  // boardId = 'design-refresh'
  // taskId = '101'
  // 两个参数都可以访问
}