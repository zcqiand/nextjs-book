// 每 60 秒重新验证
export const revalidate = 60;

// app/posts/page.tsx
async function getPosts() {
  const posts = await fetch('https://api.example.com/posts', {
    next: { revalidate: 60 }, // 等同于上面的 revalidate = 60
  });
  return posts.json();
}