// 从第 33 章提取
// 代码清单: app/data/page.tsx
// 文件名: chapter33_DataPage.ts
// app/data/page.tsx
export default async function DataPage() {
  // 默认缓存 (force-cache)
  const staticData = await fetch('https://api.example.com/static');

  // 不缓存，每次请求
  const dynamicData = await fetch('https://api.example.com/dynamic', {
    cache: 'no-store',
  });

  // ISR，60秒后重新验证
  const revalidatedData = await fetch('https://api.example.com/data', {
    next: { revalidate: 60 },
  });

  return <DataDisplay {...{ staticData, dynamicData, revalidatedData }} />;
}
