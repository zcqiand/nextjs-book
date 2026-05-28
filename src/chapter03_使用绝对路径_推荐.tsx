// 从第 3 章提取
// 代码清单: 使用绝对路径（推荐）
// 文件名: chapter03_使用绝对路径_推荐.tsx
// 使用绝对路径（推荐）
<img src="/images/hero.jpg" alt="Hero" />

// 或使用 new URL() 构造完整路径
const heroUrl = new URL('/images/hero.jpg', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000');
