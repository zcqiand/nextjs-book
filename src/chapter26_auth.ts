// 从第 26 章提取
// 代码清单: src/lib/auth.ts
// 文件名: chapter26_auth.ts
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
