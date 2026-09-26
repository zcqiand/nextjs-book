"use client";

// 边界下移的关键：'use client' 只写在需要交互的子组件里，
// 页面 page.tsx 不受影响，仍然是服务端组件。
import { useState } from "react";
import Link from "next/link";

export interface Board {
  id: string;
  name: string;
  status: string;
  description: string;
}

interface FilterBarProps {
  // boards 是普通对象数组，可以被序列化，允许从服务端组件传进来
  boards: Board[];
}

export default function FilterBar({ boards }: FilterBarProps) {
  // 过滤关键字完全活在浏览器里，用 useState 维护，随输入实时变化
  const [keyword, setKeyword] = useState("");

  // 过滤逻辑放在客户端执行，按看板名称匹配，输入时立即生效，不需要回服务端重新取数
  const filteredBoards = boards.filter((board) =>
    board.name.includes(keyword.trim()),
  );

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="输入关键字过滤看板"
        style={{
          width: "100%",
          maxWidth: 320,
          padding: "8px 12px",
          marginBottom: 16,
          border: "1px solid #d1d5db",
          borderRadius: 8,
        }}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredBoards.map((board) => (
          <li
            key={board.id}
            style={{
              padding: "12px 16px",
              marginBottom: 8,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
            }}
          >
            <Link href={`/boards/${board.id}`}>{board.name}</Link>
            <span style={{ marginLeft: 12, color: "#6b7280" }}>
              {board.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}