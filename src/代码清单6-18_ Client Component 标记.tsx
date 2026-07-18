'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href="/"
        style={{
          fontWeight: pathname === '/' ? 'bold' : 'normal',
          color: pathname === '/' ? '#0070f3' : '#333'
        }}
      >
        首页
      </Link>
      <Link
        href="/about"
        style={{
          fontWeight: pathname === '/about' ? 'bold' : 'normal',
          color: pathname === '/about' ? '#0070f3' : '#333'
        }}
      >
        关于
      </Link>
    </nav>
  );
}