// 从第 14 章提取
// 代码清单: app/contact/page.tsx
// 文件名: chapter14_page_2.tsx
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
