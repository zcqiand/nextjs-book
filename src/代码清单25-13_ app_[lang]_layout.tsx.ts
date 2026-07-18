// app/[lang]/layout.tsx
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <head>
        <link
          rel="alternate"
          hreflang="zh-CN"
          href="https://example.com/zh-CN"
        />
        <link
          rel="alternate"
          hreflang="en-US"
          href="https://example.com/en-US"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://example.com"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}