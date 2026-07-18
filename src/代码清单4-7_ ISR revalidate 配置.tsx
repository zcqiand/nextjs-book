// pages/blog/[slug].tsx
// 这个 revalidate 影响整个页面的缓存策略
export const revalidate = 60;

export default function BlogPost({ post }) {
  return <h1>{post.title}</h1>;
}