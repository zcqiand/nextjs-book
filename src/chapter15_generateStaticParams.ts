// 从第 15 章提取
// 代码清单: 静态生成 generateStaticParams
// 文件名: chapter15_generateStaticParams.ts
// Next.js 14
// generateStaticParams 被隐式认为是静态的
export function generateStaticParams() {
  return [{ slug: 'post-1' }];
}

// Next.js 15
// 需要明确返回对象，或者让函数返回 void
export function generateStaticParams() {
  return [{ slug: 'post-1' }];
}
