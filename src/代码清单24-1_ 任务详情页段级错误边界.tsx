'use client'
// 'use client' 必须亲手写在文件第一行：框架不会因为文件名是 error 就隐式注入这条指令，
// 缺了它，本文件会被按服务端组件处理，开发/运行期直接报错

import { useEffect } from 'react'

export default function TaskError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // 生产环境下服务端错误的细节（message）会被剥离，只留下 digest 哈希；
  // 上报它，是为了开发期直接排查、生产期拿 digest 与服务端日志做比对
  useEffect(() => {
    console.error('任务详情页出错，digest:', error.digest)
  }, [error])

  return (
    <div className="mx-auto max-w-md rounded-lg border border-red-200 bg-red-50 p-6 text-center">
      <h2 className="text-lg font-semibold text-red-800">任务详情加载失败</h2>
      {/* 不把 error.message 亮给用户：生产环境它本就不可靠，展示通用文案才是对的 */}
      <p className="mt-2 text-sm text-red-600">页面出了点问题，请点击下方按钮重试。</p>
      {/* reset() 会让 Next.js 重新渲染出错的段：一次性故障（如网络抖动）重试即恢复 */}
      <button
        onClick={() => reset()}
        className="mt-4 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
      >
        重试
      </button>
    </div>
  )
}