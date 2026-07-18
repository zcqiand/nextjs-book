// app/template.tsx
// 每次路由切换都会重新创建这个组件
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('template 重新创建'); // 每次访问都会打印
  return <div className="template-wrapper">{children}</div>;
}