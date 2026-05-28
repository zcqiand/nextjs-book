// 从第 10 章提取
// 代码清单: app/blog/layout.tsx
// 文件名: chapter10_layout_3.tsx
// app/blog/layout.tsx
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="搜索文章..."
      />
      {children}
    </div>
  );
}
