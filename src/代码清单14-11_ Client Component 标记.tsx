// app/components/comment-form.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { addComment } from '@/app/actions/comments';

export function CommentForm({ postSlug }: { postSlug: string }) {
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const result = await addComment(formData);

    setIsSubmitting(false);

    if (!result.success && result.errors) {
      setErrors(result.errors);
      return;
    }

    // 清空表单
    formRef.current?.reset();
  }

  return (
    <div style={{
      marginTop: '3rem',
      padding: '1.5rem',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
    }}>
      <h3 style={{ marginBottom: '1.5rem' }}>发表评论</h3>

      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="hidden" name="postSlug" value={postSlug} />

        <div style={{ marginBottom: '1rem' }}>
          <label
            htmlFor="author"
            style={{ display: 'block', marginBottom: '0.5rem' }}
          >
            用户名
          </label>
          <input
            type="text"
            id="author"
            name="author"
            required
            style={inputStyle}
          />
          {errors.author && (
            <span style={{ color: '#c62828', fontSize: '0.875rem' }}>
              {errors.author[0]}
            </span>
          )}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label
            htmlFor="content"
            style={{ display: 'block', marginBottom: '0.5rem' }}
          >
            评论内容
          </label>
          <textarea
            id="content"
            name="content"
            rows={4}
            required
            style={{ ...inputStyle, resize: 'vertical' }}
          />
          {errors.content && (
            <span style={{ color: '#c62828', fontSize: '0.875rem' }}>
              {errors.content[0]}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: isSubmitting ? '#ccc' : '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontSize: '1rem',
          }}
        >
          {isSubmitting ? '提交中...' : '提交评论'}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '1rem',
};