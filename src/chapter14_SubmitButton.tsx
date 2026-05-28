// 从第 14 章提取
// 代码清单: Client Component 标记
// 文件名: chapter14_SubmitButton.tsx
// app/components/submit-button.tsx
'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? (
        <span>
          <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>
            ⟳
          </span>
          提交中...
        </span>
      ) : (
        '提交'
      )}
    </button>
  );
}
