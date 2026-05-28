// 从第 20 章提取
// 代码清单: 默认缓存（静态）
// 文件名: chapter20_默认缓存_静态.ts
// 默认缓存（静态）
const users = await fetch('https://api.example.com/users', {
  cache: 'force-cache', // 默认值
});

// 不缓存，每次都请求
const realtime = await fetch('https://api.example.com/realtime', {
  cache: 'no-store',
});

// ISR，60 秒后重新验证
const trending = await fetch('https://api.example.com/trending', {
  next: { revalidate: 60 },
});
