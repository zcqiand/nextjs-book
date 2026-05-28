// 从第 29 章提取
// 代码清单: 1. 类型安全的 Props
// 文件名: chapter29_Button.ts
// 1. 类型安全的 Props
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

// 2. 使用 children 而非 text prop
function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}

// 好
<Button>提交</Button>

// 不好
<Button text="提交" />
