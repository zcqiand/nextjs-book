// src/lib/auth.ts
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [CredentialsProvider({/* ... */})],
  cookies: {
    sessionToken: {
      name: 'next-auth.session-token',
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax', // CSRF 防护
        maxAge: 30 * 24 * 60 * 60,
      },
    },
  },
});