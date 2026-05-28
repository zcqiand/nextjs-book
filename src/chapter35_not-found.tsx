// 从第 35 章提取
// 代码清单: not-found.js 未找到页面
// 文件名: chapter35_not-found.tsx
// app/blog/not-found.tsx
export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-gray-200">404</h1>
      <h2 className="text-2xl font-semibold mt-4">页面未找到</h2>
      <p className="text-gray-500 mt-2">抱歉，你访问的页面不存在。</p>
      <Link href="/" className="mt-4 text-blue-600 hover:underline">
        返回首页
      </Link>
    </div>
  );
}
