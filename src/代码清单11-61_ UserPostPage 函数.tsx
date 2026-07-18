export default function UserPostPage({
  params,
}: {
  params: Promise<{ id: string; postId: string }>;
}) {
  const { id, postId } = await params;
  // id 来自 [id] 文件夹
  // postId 来自 [postId] 文件夹

  return <div>{id} / {postId}</div>;
}