// 静态生成 — 构建时预渲染所有看板详情页
export async function generateStaticParams() {
  const boards = await getAllBoards();
  return boards.map(board => ({ boardId: board.id }));
}