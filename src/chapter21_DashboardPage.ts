// 从第 21 章提取
// 代码清单: shell 应用导航到微应用并传递数据
// 文件名: chapter21_DashboardPage.ts
// shell 应用导航到微应用并传递数据
<Link
  href={`/dashboard?filter=${encodeURIComponent(JSON.stringify(filter))}&token=${token}`}
>
  打开仪表盘
</Link>

// dashboard 微应用读取参数
export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const filter = params.filter
    ? JSON.parse(decodeURIComponent(params.filter as string))
    : null;
  const token = params.token;

  // 使用数据
}
