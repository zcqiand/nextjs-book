// 从第 24 章提取
// 代码清单: 好：使用原生元素，自动支持焦点
// 文件名: chapter24_使用原生元素_自动支持焦点.ts
// 好：使用原生元素，自动支持焦点
<button>提交</button>
<a href="/about">关于</a>
<input type="text" />

// 需要自定义焦点样式
button:focus-visible {
  outline: 2px solid blue;
  outline-offset: 2px;
}
