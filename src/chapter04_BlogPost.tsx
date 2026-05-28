// 从第 4 章提取
// 代码清单: ISR revalidate 配置
// 文件名: chapter04_BlogPost.tsx
// pages/blog/[slug].tsx
// 这个 revalidate 影响整个页面的缓存策略
export const revalidate = 60;

export default function BlogPost({ post }) {
  return <h1>{post.title}</h1>;
}
