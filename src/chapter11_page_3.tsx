// 从第 11 章提取
// 代码清单: app/docs/[...path]/page.tsx
// 文件名: chapter11_page_3.tsx
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
