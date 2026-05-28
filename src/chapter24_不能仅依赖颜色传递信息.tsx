// 从第 24 章提取
// 代码清单: 不能仅依赖颜色传递信息
// 文件名: chapter24_不能仅依赖颜色传递信息.tsx
// 不能仅依赖颜色传递信息
// 不好：只用红色表示错误
<span className="text-red-500">错误信息</span>

// 好：添加图标或文本说明
<span className="text-red-500 flex items-center gap-2">
  <XCircleIcon aria-hidden="true" />
  <span>错误：输入格式不正确</span>
</span>
