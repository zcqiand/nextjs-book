// 从第 36 章提取
// 代码清单: 可以设计层级标签
// 文件名: chapter36_可以设计层级标签.ts
// 可以设计层级标签
const posts = await fetch('https://api.example.com/posts', {
  next: { tags: ['posts', 'posts:featured'] }, // 同时打上两个标签
});
