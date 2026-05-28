// 从第 25 章提取
// 代码清单: 尽可能使用静态生成
// 文件名: chapter25_AboutPage.ts
// 尽可能使用静态生成
export const dynamic = 'force-static';

export default async function AboutPage() {
  const about = await fetchAboutData();
  return <About data={about} />;
}
