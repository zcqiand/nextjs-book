"use client";

// 示意清单：演示序列化边界上什么能传、什么不能传。
// 服务端组件传给客户端组件的 props 必须能被序列化。
// 大体口径：字符串、数字、布尔、null、undefined、普通对象、数组这类
// 结构化数据可以传；函数、类实例这类带行为或不可序列化的值不行，
// 具体支持清单以官方文档为准（正文已给出核查指引）。
import type { Task } from "@/lib/data";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div
      style={{
        padding: "12px 16px",
        marginBottom: 8,
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{task.title}</span>
      {/* onClick 写在客户端组件内部是合法的；非法的是从服务端把函数当 props 传进来：
         若在服务端组件里写 onComplete={() => {}} 这样的 prop，
         控制台会报 Event handlers cannot be passed to Client Component props，
         根源在于函数无法被序列化后跨过这条边界。 */}
      <button
        type="button"
        onClick={() => console.log(`准备标记任务 ${task.id} 完成`)}
        style={{
          padding: "6px 14px",
          borderRadius: 8,
          border: "none",
          backgroundColor: "#3b82f6",
          color: "#ffffff",
          cursor: "pointer",
        }}
      >
        标记完成
      </button>
    </div>
  );
}