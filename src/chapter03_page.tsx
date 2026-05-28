// 从第 3 章提取
// 代码清单: src/app/about/page.tsx
// 文件名: chapter03_page.tsx
// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>关于我们</h1>
      <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#666' }}>
        这是一个演示项目，用于学习 Next.js 项目结构。
      </p>
      <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#666', marginTop: '1rem' }}>
        Next.js 的文件系统路由让你不需要手动配置路由表——只需要把文件放在正确的位置，Next.js 自动理解它的含义。
      </p>
    </main>
  );
}
