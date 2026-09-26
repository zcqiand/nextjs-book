import Link from 'next/link';
import styles from './navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>首页</Link>
      <Link href="/tasks" className={styles.link}>任务</Link>
      <Link href="/members" className={styles.link}>成员</Link>
    </nav>
  );
}