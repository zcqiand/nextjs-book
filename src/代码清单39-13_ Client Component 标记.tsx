// 基于 Server Actions 的渐进增强
'use server';

export async function submitForm(formData) {
  // 服务端验证和保存
  const result = await processForm(formData);
  return result;
}

'use client';

function Form() {
  const [state, formAction] = useActionState(submitForm, null);

  return (
    <form action={formAction}>
      {/* 即使 JavaScript 未加载，表单仍能提交 */}
      <button>提交</button>
    </form>
  );
}