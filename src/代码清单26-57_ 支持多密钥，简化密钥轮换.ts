// 支持多密钥，简化密钥轮换
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [CredentialsProvider({/* ... */})],
  secret: [
    process.env.AUTH_SECRET,
    process.env.AUTH_SECRET_OLD, // 仍然接受旧密钥
  ],
});