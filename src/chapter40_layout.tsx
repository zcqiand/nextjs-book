// 从第 40 章提取
// 代码清单: app/(marketing)/layout.tsx
// 文件名: chapter40_layout.tsx
// app/(marketing)/layout.tsx
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="marketing-layout">
      <MarketingHeader />
      <main>{children}</main>
      <MarketingFooter />
    </div>
  );
}

// app/(app)/layout.tsx
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell>
      <Sidebar />
      <main>{children}</main>
    </AppShell>
  );
}
