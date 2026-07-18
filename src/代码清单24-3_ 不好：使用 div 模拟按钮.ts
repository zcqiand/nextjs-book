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