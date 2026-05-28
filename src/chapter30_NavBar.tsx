// 从第 30 章提取
// 代码清单: Client Component 标记
// 文件名: chapter30_NavBar.tsx
'use client';

import { useTranslations } from 'next-intl';

export function NavBar() {
  const t = useTranslations('nav');

  return (
    <nav>
      <a href="/">{t('home')}</a>
      <a href="/blog">{t('blog')}</a>
      <a href="/about">{t('about')}</a>
      <a href="/contact">{t('contact')}</a>
    </nav>
  );
}
