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