// 可以设计层级标签
const posts = await fetch('https://api.example.com/posts', {
  next: { tags: ['posts', 'posts:featured'] }, // 同时打上两个标签
});