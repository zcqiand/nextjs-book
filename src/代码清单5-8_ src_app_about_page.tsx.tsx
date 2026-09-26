// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>关于我们</h1>
      <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1rem' }}>
        taskflow-board 是一个为中小团队打造的协作看板，帮助团队把任务组织得井井有条。
      </p>
      <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#666' }}>
        这个页面本身，就是用你在 5.2 节学到的 page.tsx 约定创建的。
      </p>
    </main>
  );
}