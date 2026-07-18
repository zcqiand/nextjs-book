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