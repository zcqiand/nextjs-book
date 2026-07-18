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