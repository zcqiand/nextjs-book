// 尽可能使用静态生成
export const dynamic = 'force-static';

export default async function AboutPage() {
  const about = await fetchAboutData();
  return <About data={about} />;
}