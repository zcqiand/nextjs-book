// 从第 35 章提取
// 代码清单: loading.js 加载状态
// 文件名: chapter35_loading.tsx
// app/blog/loading.tsx
export default function Loading() {
  return (
    <div className="space-y-4">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mt-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mt-2"></div>
      </div>
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mt-4"></div>
      </div>
    </div>
  );
}
