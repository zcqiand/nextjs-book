// 从第 21 章提取
// 代码清单: app/(marketing)/layout.tsx
// 文件名: chapter21_layout.tsx
// app/(marketing)/layout.tsx
// 营销模块的布局
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="marketing-container">
      <MarketingHeader />
      <main>{children}</main>
      <MarketingFooter />
    </div>
  );
}
