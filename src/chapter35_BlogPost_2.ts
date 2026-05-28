// 从第 35 章提取
// 代码清单: 静态生成 generateStaticParams
// 文件名: chapter35_BlogPost_2.ts
// Next.js 15
export function generateStaticParams() {
  return [{ slug: 'hello' }];
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // ...
}
