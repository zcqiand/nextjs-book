import styles from './Button.module.css';

export default function Button({ variant = 'primary', children }) {
  return (
    <button className={`${styles.base} ${styles[variant]}`}>
      {children}
    </button>
  );
}