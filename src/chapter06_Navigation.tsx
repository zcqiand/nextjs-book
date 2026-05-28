// 从第 6 章提取
// 代码清单: Link 导航组件
// 文件名: chapter06_Navigation.tsx
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
