// 从第 8 章提取
// 代码清单: 水平居中
// 文件名: chapter08_水平居中.tsx
// 水平居中
<div className="flex justify-center">...</div>

// 垂直居中
<div className="flex items-center">...</div>

// 水平分布，两端对齐
<div className="flex justify-between">...</div>

// flex-col 让主轴变成垂直方向
<div className="flex flex-col">...</div>

// 自动填充剩余空间
<div className="flex">
  <div>固定内容</div>
  <div className="flex-1">填充剩余</div>
</div>
