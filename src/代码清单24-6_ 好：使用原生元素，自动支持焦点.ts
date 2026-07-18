// 好：使用原生元素，自动支持焦点
<button>提交</button>
<a href="/about">关于</a>
<input type="text" />

// 需要自定义焦点样式
button:focus-visible {
  outline: 2px solid blue;
  outline-offset: 2px;
}