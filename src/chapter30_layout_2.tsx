// 从第 30 章提取
// 代码清单: app/[locale]/layout.tsx
// 文件名: chapter30_layout_2.tsx
// app/[locale]/layout.tsx
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRTL = locale === 'ar'; // 阿拉伯语是 RTL

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className={isRTL ? 'rtl' : 'ltr'}>{children}</body>
    </html>
  );
}
