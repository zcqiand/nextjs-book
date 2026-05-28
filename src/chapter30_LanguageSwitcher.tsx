// 从第 30 章提取
// 代码清单: Client Component 标记
// 文件名: chapter30_LanguageSwitcher.tsx
'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations('common');
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'zh-CN', label: '中文' },
    { code: 'ja', label: '日本語' },
    { code: 'ar', label: 'العربية' },
  ];

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={(e) => switchLocale(e.target.value)}
        className="appearance-none bg-white border rounded px-3 py-2 pr-8"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
      <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
        ▼
      </span>
    </div>
  );
}
