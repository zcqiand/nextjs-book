import Link from 'next/link';
import styles from './navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>首页</Link>
      <Link href="/about" className={styles.link}>关于</Link>
      <Link href="/contact" className={styles.link}>联系</Link>
    </nav>
  );
}