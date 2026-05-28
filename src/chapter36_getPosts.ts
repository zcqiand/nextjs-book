// 从第 36 章提取
// 代码清单: ISR revalidate 配置
// 文件名: chapter36_getPosts.ts
// 每 60 秒重新验证
export const revalidate = 60;

// app/posts/page.tsx
async function getPosts() {
  const posts = await fetch('https://api.example.com/posts', {
    next: { revalidate: 60 }, // 等同于上面的 revalidate = 60
  });
  return posts.json();
}
