// 从第 34 章提取
// 代码清单: components/button.tsx
// 文件名: chapter34_Button.ts
// components/button.tsx
import styles from './button.module.css';

export function Button({ variant = 'primary', children }) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
