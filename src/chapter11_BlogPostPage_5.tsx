// 从第 11 章提取
// 代码清单: 静态生成 generateStaticParams
// 文件名: chapter11_BlogPostPage_5.tsx
// app/blog/[slug]/page.tsx
export function generateStaticParams() {
  // 返回所有需要预渲染的参数组合
  return [
    { slug: 'nextjs-15' },
    { slug: 'app-router' },
    { slug: 'remote-work' },
  ];
}

export default function BlogPostPage({ params }) {
  // ...
}
