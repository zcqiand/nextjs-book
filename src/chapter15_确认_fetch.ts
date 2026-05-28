// 从第 15 章提取
// 代码清单: 确认 fetch 请求有明确的 cache 选项
// 文件名: chapter15_确认_fetch.ts
// 确认 fetch 请求有明确的 cache 选项
const data = await fetch(url, {
  cache: 'no-store', // 或者 'force-cache'
});
