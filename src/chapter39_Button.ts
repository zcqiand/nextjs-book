// 从第 39 章提取
// 代码清单: 不再需要 forwardRef
// 文件名: chapter39_Button.ts
// 不再需要 forwardRef
function Button({ ref, children, ...props }) {
  return <button ref={ref} {...props}>{children}</button>;
}

// 使用
<Button ref={buttonRef}>点击</Button>
