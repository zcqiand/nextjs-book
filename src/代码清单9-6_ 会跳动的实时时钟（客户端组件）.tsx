// src/components/LiveClock.tsx
"use client";

import { useEffect, useState } from "react";

// 为什么初始值直接用当前时间：服务端渲染这棵组件树时，
// useState 的初始值会被算出来并写进首次 HTML——
// 所以「源代码里的时刻」是服务器生成页面的那一瞬间；
// 而页面上持续跳动的时刻，来自浏览器水合之后 setInterval 的更新。
// 两者的差值，就是本章要你亲眼看到的「水合前后的分界」。
export default function LiveClock() {
  const [now, setNow] = useState(() => new Date().toLocaleTimeString("zh-CN"));

  useEffect(() => {
    // 挂载后每秒刷新一次 state，触发客户端重新渲染；
    // 返回清理函数是为了组件卸载时移除定时器，避免内存泄漏。
    const timer = setInterval(() => {
      setNow(new Date().toLocaleTimeString("zh-CN"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p className="text-sm text-slate-500">
      当前时刻：<span className="font-mono text-slate-800">{now}</span>
    </p>
  );
}