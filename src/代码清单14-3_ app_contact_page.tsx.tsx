// app/contact/page.tsx
import { submitContactForm } from '@/app/actions';

export default function ContactPage() {
  return (
    <form action={submitContactForm}>
      <div>
        <label htmlFor="name">姓名</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="email">邮箱</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="message">留言</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      <button type="submit">提交</button>
    </form>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '1rem',
};