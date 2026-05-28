// 从第 39 章提取
// 代码清单: SubmitButton 函数
// 文件名: chapter39_SubmitButton.ts
import { useFormStatus } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? '提交中...' : '提交'}
    </button>
  );
}

function MyForm() {
  return (
    <form>
      <input name="email" />
      <SubmitButton />
    </form>
  );
}
