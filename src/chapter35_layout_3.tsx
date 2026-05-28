// 从第 35 章提取
// 代码清单: app/(marketing)/layout.tsx
// 文件名: chapter35_layout_3.tsx
// app/(marketing)/layout.tsx
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="marketing-theme">
      <MarketingHeader />
      {children}
      <MarketingFooter />
    </div>
  );
}
