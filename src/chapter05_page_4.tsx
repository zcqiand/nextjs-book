// 从第 5 章提取
// 代码清单: src/app/contact/team/page.tsx
// 文件名: chapter05_page_4.tsx
// src/app/contact/team/page.tsx
export default function TeamContactPage() {
  return (
    <main>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>团队联系</h1>
      <p style={{ marginBottom: '1rem' }}>
        如果您希望与我们的团队直接联系，请通过以下方式联系我们：
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        <div style={{ padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>技术支持</h3>
          <p>Email: support@example.com</p>
          <p>响应时间: 24小时内</p>
        </div>

        <div style={{ padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>商务合作</h3>
          <p>Email: business@example.com</p>
          <p>响应时间: 48小时内</p>
        </div>

        <div style={{ padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>媒体采访</h3>
          <p>Email: press@example.com</p>
          <p>响应时间: 72小时内</p>
        </div>
      </div>
    </main>
  );
}
