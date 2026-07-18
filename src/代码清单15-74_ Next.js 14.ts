// Next.js 14
// 默认情况下，fetch 请求的缓存行为是不确定的
const data = await fetch('https://api.example.com/data');

// Next.js 15
// 现在需要在 fetch 时显式指定 cache 选项
const data = await fetch('https://api.example.com/data', {
  cache: 'no-store', // 明确不缓存，每次都请求新数据
});

// 或者明确缓存
const cachedData = await fetch('https://api.example.com/static-data', {
  cache: 'force-cache', // 强制缓存
});