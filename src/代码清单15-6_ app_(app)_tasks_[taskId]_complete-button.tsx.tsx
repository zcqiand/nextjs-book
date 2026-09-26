"use client";

// 这个组件必须标 'use client'，原因有二：
// useState 是 React 的客户端 Hook，onClick 事件只在浏览器里发生，
// 两者都无法在服务端组件里使用，不加指令构建能过，页面一渲染就报错。
import { useState } from "react";

interface CompleteButtonProps {
  taskId: string;
  done: boolean;
}

export default function CompleteButton({ taskId, done }: CompleteButtonProps) {
  // 初始完成态来自服务端传入的 done，此后交给本地状态接管
  const [isDone, setIsDone] = useState(done);

  function handleToggle() {
    setIsDone((previous) => !previous);
    // 演示用日志；真实项目里这一步应调用 Server Action 同步回服务端（见第 20 章）
    console.log(`任务 ${taskId} 完成状态切换为 ${!isDone}`);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      style={{
        padding: "8px 16px",
        borderRadius: 8,
        border: "none",
        backgroundColor: isDone ? "#10b981" : "#3b82f6",
        color: "#ffffff",
        cursor: "pointer",
      }}
    >
      {isDone ? "已完成" : "标记完成"}
    </button>
  );
}