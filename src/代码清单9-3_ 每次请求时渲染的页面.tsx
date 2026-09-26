// src/app/now/page.tsx
import { headers } from "next/headers";

// 关键差异只有两处：一是引入了 headers()，二是组件声明为 async。
// 一旦页面读取了请求专属的信息（请求头因人而异），
// 这份 HTML 就没法提前生成给所有人共用，
// Next.js 便把它降级为「每个请求到达时现场执行一次」。
// Next.js 15 中 headers() 返回 Promise，必须 await。
export default async function NowPage() {
  const headerList = await headers();
  // 截取前 60 个字符即可看出「不同浏览器请求头不同」，
  // 也避免过长的 user-agent 撑破排版。
  const userAgent = (headerList.get("user-agent") ?? "未知").slice(0, 60);
  const receivedAt = new Date().toLocaleTimeString("zh-CN");

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">这个页面是刚刚生成的</h1>
      <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-700">
          服务器收到请求的时刻：
          <span className="font-mono font-semibold text-emerald-600">{receivedAt}</span>
        </p>
        <p className="break-all text-sm text-slate-500">
          你的浏览器标识（user-agent 前 60 字符）：{userAgent}
        </p>
      </div>
    </main>
  );
}