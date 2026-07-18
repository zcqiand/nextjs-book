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