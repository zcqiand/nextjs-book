// 从第 6 章提取
// 代码清单: 字符串形式
// 文件名: chapter06_字符串形式.ts
// 字符串形式
<Link href="/about">关于</Link>

// 对象形式（更灵活，支持传递查询参数）
<Link href={{ pathname: '/about', query: { tab: 'team' } }}>团队介绍</Link>
