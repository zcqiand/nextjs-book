// 从第 8 章提取
// 代码清单: Client Component 标记
// 文件名: chapter08_Navigation.tsx
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
    <nav className="flex items-center gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              px-3 py-2 rounded-md text-sm font-medium transition-colors
              ${isActive
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }
            `}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
