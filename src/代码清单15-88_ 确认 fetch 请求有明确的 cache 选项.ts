// 确认 fetch 请求有明确的 cache 选项
const data = await fetch(url, {
  cache: 'no-store', // 或者 'force-cache'
});