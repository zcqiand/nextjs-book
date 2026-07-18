const res = await fetch('/api/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: '新文章', content: '内容', authorId: '1' }),
});
const post = await res.json();