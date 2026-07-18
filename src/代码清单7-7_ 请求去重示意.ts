// 同一个渲染周期内多次调用 fetch
// 实际只会发出一次 HTTP 请求
const [a, b, c] = await Promise.all([
  fetch('https://api.example.com/posts'),
  fetch('https://api.example.com/posts'),
  fetch('https://api.example.com/posts'),
]);