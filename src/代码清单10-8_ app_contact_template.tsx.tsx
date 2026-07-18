// app/contact/template.tsx
export default function ContactTemplate({ children }: { children: React.ReactNode }) {
  // 每次访问都重新创建组件，表单状态自动重置
  return <div>{children}</div>;
}