// app/docs/[...slug]/page.tsx
export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <main>
      <h1>taskflow-board 开发文档</h1>
      <p>当前路径: /{'docs'}/{slug.join('/')}</p>

      <ul>
        {slug.map((segment, index) => (
          <li key={index}>
            {segment}
          </li>
        ))}
      </ul>
    </main>
  );
}