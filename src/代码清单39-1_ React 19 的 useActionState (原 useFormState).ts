// React 19 的 useActionState (原 useFormState)
import { useActionState } from 'react';
import { submitForm } from './actions';

function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitForm, null);

  return (
    <form action={formAction}>
      {state?.error && <p className="error">{state.error}</p>}
      <input name="email" type="email" />
      <button type="submit" disabled={isPending}>
        {isPending ? '提交中...' : '提交'}
      </button>
    </form>
  );
}