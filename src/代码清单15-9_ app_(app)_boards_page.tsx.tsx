// 注意：这个文件顶部依然没有 'use client'，它还是服务端组件。
// 'use client' 写在了 filter-bar.tsx 里，交互边界被下移到了真正需要它的子组件上。
import FilterBar from "./filter-bar";

// 与清单15-1 同一套内联看板数据，作为可序列化的普通对象传给客户端组件
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
      {/* boards 是普通对象数组，能被序列化，可以安全跨越服务端到客户端的边界 */}
      <FilterBar boards={boardList} />
    </main>
  );
}