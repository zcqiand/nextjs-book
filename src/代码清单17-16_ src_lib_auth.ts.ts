// src/lib/auth.ts
export const { handlers, auth, signIn, signOut } = NextAuth({
  // ...
  cookies: {
    sessionToken: {
      name: 'next-auth.session-token',
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60, // 30 天
      },
    },
  },
});