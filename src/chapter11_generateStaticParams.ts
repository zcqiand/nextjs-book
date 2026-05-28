// 从第 11 章提取
// 代码清单: 静态生成 generateStaticParams
// 文件名: chapter11_generateStaticParams.ts
// 单个动态段
export function generateStaticParams() {
  return [
    { slug: 'post-1' },
    { slug: 'post-2' },
    { slug: 'post-3' },
  ];
}

// 多个动态段
export function generateStaticParams() {
  return [
    { category: 'tech', slug: 'nextjs-15' },
    { category: 'life', slug: 'remote-work' },
  ];
}
