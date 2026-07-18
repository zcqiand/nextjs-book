// app/api/auth/logout/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });

  // 清除 auth-token Cookie
  response.cookies.delete('auth-token');

  return response;
}