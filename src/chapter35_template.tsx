// 从第 35 章提取
// 代码清单: app/(marketing)/template.tsx
// 文件名: chapter35_template.tsx
// app/(marketing)/template.tsx
export default function MarketingTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  // 每次导航都会重新创建
  // 适合需要重置状态的场景
  return <div className="marketing-page">{children}</div>;
}
