'use client'
// 根级边界同样是客户端组件，'use client' 的约束与清单 24-1 完全一致

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // 与段级边界同理：digest 是生产环境唯一可靠的错误线索，先落日志再渲染
  console.error('应用级错误，digest:', error.digest)

  return (
    // 它替换的是根布局，渲染的是完整文档，因此必须自带 <html> 与 <body>，
    // 缺任一标签，这份边界 UI 自己都无法构成合法页面
    <html lang="zh-CN">
      <body className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="max-w-md rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">应用出现故障</h2>
          <p className="mt-2 text-sm text-slate-500">
            发生了应用级错误，请尝试重新加载整个应用。
          </p>
          <button
            onClick={() => reset()}
            className="mt-6 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
          >
            重新加载应用
          </button>
        </div>
      </body>
    </html>
  )
}