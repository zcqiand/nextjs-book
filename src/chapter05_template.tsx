// 从第 5 章提取
// 代码清单: app/template.tsx
// 文件名: chapter05_template.tsx
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
