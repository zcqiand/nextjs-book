// 从第 10 章提取
// 代码清单: app/contact/template.tsx
// 文件名: chapter10_template.tsx
// app/contact/template.tsx
export default function ContactTemplate({ children }: { children: React.ReactNode }) {
  // 每次访问都重新创建组件，表单状态自动重置
  return <div>{children}</div>;
}
