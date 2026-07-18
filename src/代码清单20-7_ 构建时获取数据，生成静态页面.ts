// 构建时获取数据，生成静态页面
export const dynamic = 'force-static';

export default async function AboutPage() {
  const about = await fetch('https://api.example.com/about').then(r => r.json());
  return <About data={about} />;
}