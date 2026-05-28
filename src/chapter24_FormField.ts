// 从第 24 章提取
// 代码清单: FormField 函数
// 文件名: chapter24_FormField.ts
function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  const errorId = `${label}-error`;

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <div aria-describedby={error ? errorId : undefined}>
        {children}
      </div>
      {error && (
        <p id={errorId} role="alert" className="text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
