// 从第 12 章提取
// 代码清单: app/@header/page.tsx
// 文件名: chapter12_page_2.tsx
// app/@header/page.tsx
export default function Header() {
  return (
    <header style={{
      height: '60px',
      backgroundColor: '#34495e',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
    }}>
      <h1 style={{ fontSize: '1.25rem' }}>数据仪表盘</h1>
      <div>
        <span style={{ marginRight: '1rem' }}>欢迎，用户</span>
        <a href="/logout" style={{ color: '#ecf0f1' }}>退出</a>
      </div>
    </header>
  );
}
