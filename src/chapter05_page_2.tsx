// 从第 5 章提取
// 代码清单: src/app/about/page.tsx
// 文件名: chapter05_page_2.tsx
// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>关于我们</h1>
      <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1rem' }}>
        我们是一个专注于 Web 开发的技术团队。
      </p>
      <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#666' }}>
        本书旨在帮助开发者掌握 Next.js，从入门到实战。
      </p>
    </main>
  );
}
