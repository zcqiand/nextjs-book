// components/Navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: '首页' },
    { href: '/about', label: '关于' },
    { href: '/blog', label: '博客' },
    { href: '/contact', label: '联系' },
  ];

  return (
    <nav className={styles.nav}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}