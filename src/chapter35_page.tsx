// 从第 35 章提取
// 代码清单: app/@feed/page.tsx
// 文件名: chapter35_page.tsx
// app/@feed/page.tsx
export default function Feed() {
  return <div className="feed">Feed Content</div>;
}

// app/@sidebar/page.tsx
export default function Sidebar() {
  return <div className="sidebar">Sidebar Content</div>;
}

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>@sidebar</nav>
      <main>{children}</main>
      <div>@feed</div>
    </div>
  );
}
