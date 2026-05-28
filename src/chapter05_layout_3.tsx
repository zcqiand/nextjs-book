// 从第 5 章提取
// 代码清单: app/blog/layout.tsx
// 文件名: chapter05_layout_3.tsx
// app/blog/layout.tsx
export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 在布局中获取博客元数据
  const categories = await fetchBlogCategories();

  return (
    <div className="blog-layout">
      <aside className="blog-sidebar">
        <h3>博客分类</h3>
        <ul>
          {categories.map(cat => (
            <li key={cat.id}>
              <a href={`/blog/category/${cat.slug}`}>{cat.name}</a>
            </li>
          ))}
        </ul>
      </aside>
      <main className="blog-content">
        {children}
      </main>
    </div>
  );
}
