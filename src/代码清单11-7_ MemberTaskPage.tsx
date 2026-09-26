export default async function MemberTaskPage({
  params,
}: {
  params: Promise<{ memberId: string; taskId: string }>;
}) {
  const { memberId, taskId } = await params;
  // memberId 来自 [memberId] 文件夹
  // taskId 来自 [taskId] 文件夹

  return <div>{memberId} / {taskId}</div>;
}