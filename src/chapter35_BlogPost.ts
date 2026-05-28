// 从第 35 章提取
// 代码清单: Next.js 14
// 文件名: chapter35_BlogPost.ts
// Next.js 14
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  // ...
}

// Next.js 15
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // ...
}
