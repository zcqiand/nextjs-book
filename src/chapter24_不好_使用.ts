// 从第 24 章提取
// 代码清单: 不好：使用 div 模拟按钮
// 文件名: chapter24_不好_使用.ts
// 不好：使用 div 模拟按钮
<div
  className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
  onClick={handleClick}
>
  点击我
</div>

// 好：使用原生 button
<button
  className="px-4 py-2 bg-blue-600 text-white rounded"
  onClick={handleClick}
>
  点击我
</button>
