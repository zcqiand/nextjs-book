// 使用绝对路径（推荐）
<img src="/images/hero.jpg" alt="Hero" />

// 或使用 new URL() 构造完整路径
const heroUrl = new URL('/images/hero.jpg', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000');