// 从第 6 章提取
// 代码清单: 默认预取（推荐）
// 文件名: chapter06_默认预取_推荐.ts
// 默认预取（推荐）
<Link href="/about">关于</Link>

// 禁用预取（不推荐）
<Link href="/about" prefetch={false}>关于</Link>

// 总是预取
<Link href="/about" prefetch={true}>关于</Link>
