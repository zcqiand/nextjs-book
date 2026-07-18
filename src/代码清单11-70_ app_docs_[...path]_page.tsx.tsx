// app/docs/[...path]/page.tsx
export default function DocsPage({
  params,
}: {
  params: { path: string[] };
}) {
  return (
    <main>
      <h1>文档路径</h1>
      <p>当前路径: /{'docs'}/{params.path.join('/')}</p>

      <ul>
        {params.path.map((segment, index) => (
          <li key={index}>
            {segment}
          </li>
        ))}
      </ul>
    </main>
  );
}