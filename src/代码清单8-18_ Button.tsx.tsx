// Button.tsx
import styles from './Button.module.css';

export default function Button({ children }) {
  return (
    <button className={styles.button}>
      <span className={styles.text}>{children}</span>
    </button>
  );
}