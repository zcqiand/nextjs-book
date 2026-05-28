// 从第 20 章提取
// 代码清单: 默认行为：鼠标悬停时预获取
// 文件名: chapter20_默认行为_鼠标悬停时预获取.ts
// 默认行为：鼠标悬停时预获取
<Link href="/blog/post-1">阅读文章</Link>

// 强制预获取
<Link href="/blog/post-1" prefetch={true}>
  阅读文章
</Link>

// 禁用预获取（大型列表中使用，避免过多请求）
<Link href="/blog/post-1" prefetch={false}>
  阅读文章
</Link>
