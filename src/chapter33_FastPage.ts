// 从第 33 章提取
// 代码清单: ISR revalidate 配置
// 文件名: chapter33_FastPage.ts
// 优化：使用缓存减少 TTFB
export const revalidate = 60;

export default async function FastPage() {
  const data = await getCachedData();
  return <Page data={data} />;
}
