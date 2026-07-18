// 不再需要 forwardRef
function Button({ ref, children, ...props }) {
  return <button ref={ref} {...props}>{children}</button>;
}

// 使用
<Button ref={buttonRef}>点击</Button>