// 从第 26 章提取
// 代码清单: 支持多密钥，简化密钥轮换
// 文件名: chapter26_支持多密钥_简化密钥轮换.ts
// 支持多密钥，简化密钥轮换
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [CredentialsProvider({/* ... */})],
  secret: [
    process.env.AUTH_SECRET,
    process.env.AUTH_SECRET_OLD, // 仍然接受旧密钥
  ],
});
