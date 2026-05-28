// 从第 30 章提取
// 代码清单: Server Component 示例
// 文件名: chapter30_HomePage.ts
// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('common');

  return (
    <main>
      <h1>{t('appName')}</h1>
      <p>{t('welcome')}</p>
      <button>{t('submit')}</button>
    </main>
  );
}
