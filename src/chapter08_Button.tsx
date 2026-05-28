// 从第 8 章提取
// 代码清单: Button.tsx
// 文件名: chapter08_Button.tsx
// Button.tsx
import styles from './Button.module.css';

export default function Button({ children }) {
  return (
    <button className={styles.button}>
      <span className={styles.text}>{children}</span>
    </button>
  );
}
