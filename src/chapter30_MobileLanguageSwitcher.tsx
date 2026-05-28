// 从第 30 章提取
// 代码清单: Client Component 标记
// 文件名: chapter30_MobileLanguageSwitcher.tsx
'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export function MobileLanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'zh-CN', label: '中文' },
    { code: 'ja', label: '日本語' },
    { code: 'ar', label: 'العربية' },
  ];

  return (
    <div className="space-y-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => router.replace(pathname, { locale: lang.code })}
          className={`block w-full text-left px-4 py-2 rounded ${
            locale === lang.code ? 'bg-blue-100 text-blue-600' : ''
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
