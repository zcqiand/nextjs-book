// 从第 35 章提取
// 代码清单: Next.js 15: useFormState -> useActionState
// 文件名: chapter35_Form.tsx
// Next.js 15: useFormState -> useActionState
import { useActionState } from 'react';
import { submitForm } from './actions';

export default function Form() {
  const [state, formAction, isPending] = useActionState(submitForm, null);

  return (
    <form action={formAction}>
      {/* ... */}
    </form>
  );
}
