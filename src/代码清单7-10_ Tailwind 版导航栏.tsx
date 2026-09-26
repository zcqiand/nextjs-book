// src/components/Navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: '首页' },
    { href: '/tasks', label: '任务' },
    { href: '/members', label: '成员' },
    { href: '/about', label: '关于' },
  ];

  return (
    <nav className="flex gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href;
        // 条件拼接：命中当前路径时追加高亮类名
        const cls = `px-4 py-2 rounded transition-colors hover:bg-gray-100 hover:text-blue-600 ${
          isActive ? 'bg-blue-600 text-white' : 'text-gray-600'
        }`;

        return (
          <Link key={link.href} href={link.href} className={cls}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}