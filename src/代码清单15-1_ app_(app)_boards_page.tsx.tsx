// 服务端组件：本文件无指令，三条看板为内联演示数据（口径见正文）。
import Link from "next/link";

const boardList = [
  {
    id: "design-refresh",
    name: "官网改版",
    status: "进行中",
    description: "官网视觉与信息架构全面改版。",
  },
  {
    id: "mobile-app",
    name: "移动端适配",
    status: "进行中",
    description: "核心页面适配移动端断点。",
  },
  {
    id: "content-launch",
    name: "内容上线",
    status: "规划中",
    description: "帮助文档与落地页文案批量上线。",
  },
];

export default function BoardsPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, marginBottom: 16 }}>看板</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {boardList.map((board) => (
          <li
            key={board.id}
            style={{
              padding: "12px 16px",
              marginBottom: 8,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
            }}
          >
            {/* 每张卡片保留 Link，看板详情路由 /boards/[boardId] 的入口不丢 */}
            <Link href={`/boards/${board.id}`}>{board.name}</Link>
            <span style={{ marginLeft: 12, color: "#6b7280" }}>
              {board.status}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}