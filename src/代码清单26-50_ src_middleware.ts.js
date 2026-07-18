// src/middleware.ts
import { auth } from '@/lib/auth';

export default auth((req) => {
  // 验证 CSRF token
  const csrfToken = req.headers.get('x-csrf-token');
  const origin = req.headers.get('origin');
  const referer = req.headers.get('referer');

  // 验证请求来源
  const isValidOrigin =
    origin === process.env.NEXT_PUBLIC_APP_URL ||
    origin === `https://${process.env.VERCEL_URL}`;

  if (!isValidOrigin) {
    return Response.json({ error: 'Invalid origin' }, { status: 403 });
  }
});