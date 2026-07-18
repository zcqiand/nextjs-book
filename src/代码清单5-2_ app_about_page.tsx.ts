// app/about/page.tsx
export default async function AboutPage() {
  // 可以在这里直接 await 数据获取
  const data = await fetchSomeData();

  return (
    <main>
      <h1>关于我们</h1>
      <p>页面内容。</p>
    </main>
  );
}