// 从第 7 章提取
// 代码清单: JS 代码
// 文件名: chapter07_JS_代码_2.ts
const res = await fetch('/api/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: '新文章', content: '内容', authorId: '1' }),
});
const post = await res.json();
