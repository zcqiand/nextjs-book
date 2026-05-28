// 从第 30 章提取
// 代码清单: app/[locale]/layout.tsx
// 文件名: chapter30_layout.tsx
// app/[locale]/layout.tsx
import { getMessages, getTranslations } from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}
