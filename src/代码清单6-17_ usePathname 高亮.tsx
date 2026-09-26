'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href="/tasks"
        style={{
          fontWeight: pathname === '/tasks' ? 'bold' : 'normal',
          color: pathname === '/tasks' ? '#0070f3' : '#333'
        }}
      >
        任务
      </Link>
      <Link
        href="/members"
        style={{
          fontWeight: pathname === '/members' ? 'bold' : 'normal',
          color: pathname === '/members' ? '#0070f3' : '#333'
        }}
      >
        成员
      </Link>
    </nav>
  );
}