// 从第 5 章提取
// 代码清单: src/app/contact/page.tsx
// 文件名: chapter05_page_3.tsx
// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>联系我们</h1>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>姓名</label>
          <input
            type="text"
            id="name"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>

        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>邮箱</label>
          <input
            type="email"
            id="email"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>

        <div>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>留言</label>
          <textarea
            id="message"
            rows={5}
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem',
              resize: 'vertical'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          提交
        </button>
      </form>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>其他联系方式</h3>
        <p>邮箱: contact@example.com</p>
        <p>电话: +86 138 0000 0000</p>
      </div>
    </main>
  );
}
