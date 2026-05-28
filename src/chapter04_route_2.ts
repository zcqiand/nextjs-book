// 从第 4 章提取
// 代码清单: App Router - 直接在组件内获取数据
// 文件名: chapter04_route_2.ts
// App Router - 直接在组件内获取数据
// Next.js 自动在服务端执行这个函数
export default async function Page() {
  const data = await fetchData();
  return <div>{data.content}</div>;
}
