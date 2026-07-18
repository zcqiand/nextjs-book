// 安全的 Cookie 设置
response.cookies.set('auth-token', token, {
  httpOnly: true, // 防止 XSS 攻击
  secure: process.env.NODE_ENV === 'production', // 生产环境使用 HTTPS
  sameSite: 'lax', // 防止 CSRF 攻击
  maxAge: 60 * 60 * 24 * 7, // 7 天有效期
  path: '/', // Cookie 作用域为整个应用
});