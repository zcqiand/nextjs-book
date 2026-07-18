// app/contact/page.tsx
import { SubmitButton } from '@/app/components/submit-button';
import { submitContactForm } from '@/app/actions';

export default function ContactPage() {
  return (
    <form action={submitContactForm}>
      {/* 表单字段 */}
      <input name="name" type="text" required />
      <input name="email" type="email" required />

      <SubmitButton />
    </form>
  );
}