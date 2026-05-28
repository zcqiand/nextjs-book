// 从第 8 章提取
// 代码清单: Button 函数
// 文件名: chapter08_Button_2.tsx
import styles from './Button.module.css';

export default function Button({ variant = 'primary', children }) {
  return (
    <button className={`${styles.base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
