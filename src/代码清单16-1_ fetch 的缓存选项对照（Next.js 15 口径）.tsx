// Next.js 15 起 fetch 默认不再缓存（默认 no-store），四种写法对应四种缓存意图：
await fetch(url);
// 默认不缓存：适合每次都要最新数据的场景（Next 14 的默认值是缓存，迁移老项目时逐个确认）

await fetch(url, { cache: 'force-cache' });
// 强制进 Data Cache 且长期有效：适合构建期已确定、几乎不变的数据

await fetch(url, { next: { revalidate: 30 } });
// 缓存 30 秒后过期：适合「会变化但不频繁」的数据，比如任务列表、商品库存

await fetch(url, { next: { tags: ['tasks'] } });
// 按标签缓存：数据变更时在服务端调用 revalidateTag('tasks') 精确失效，不必干等过期