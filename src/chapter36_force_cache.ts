// 从第 36 章提取
// 代码清单: force-cache - 默认，缓存请求结果
// 文件名: chapter36_force_cache.ts
// force-cache - 默认，缓存请求结果
const data1 = await fetch('https://api.example.com/data', {
  cache: 'force-cache',
});

// no-store - 不缓存，每次请求
const data2 = await fetch('https://api.example.com/realtime', {
  cache: 'no-store',
});

// only-if-cached - 只返回缓存，没有则报错
const data3 = await fetch('https://api.example.com/data', {
  cache: 'only-if-cached',
  mode: 'same-origin',
});
