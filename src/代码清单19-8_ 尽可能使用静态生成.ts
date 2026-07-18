// 尽可能使用静态生成
export const dynamic = 'force-static';

export default async function AboutPage() {
  const data = await fetch('https://api.example.com/about').then(r => r.json());
  return <About data={data} />;
}