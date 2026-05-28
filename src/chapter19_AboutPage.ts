// 从第 19 章提取
// 代码清单: 尽可能使用静态生成
// 文件名: chapter19_AboutPage.ts
// 尽可能使用静态生成
export const dynamic = 'force-static';

export default async function AboutPage() {
  const data = await fetch('https://api.example.com/about').then(r => r.json());
  return <About data={data} />;
}
