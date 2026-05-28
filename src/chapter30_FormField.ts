// 从第 30 章提取
// 代码清单: 组件中使用
// 文件名: chapter30_FormField.ts
// 组件中使用
function FormField({ icon, children }: { icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      {icon && <span className="icon-end">{icon}</span>}
      {children}
    </div>
  );
}
