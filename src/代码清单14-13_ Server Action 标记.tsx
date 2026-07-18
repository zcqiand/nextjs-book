// app/actions.ts
'use server';

import { redirect } from 'next/navigation';

export async function protectedAction(formData: FormData) {
  // 验证请求来源
  const referer = headers().get('referer');
  const origin = headers().get('origin');

  if (!referer || !referer.startsWith(origin)) {
    throw new Error('Invalid request origin');
  }

  // 执行操作...
}