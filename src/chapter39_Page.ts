// 从第 39 章提取
// 代码清单: Next.js 14: params 作为普通参数
// 文件名: chapter39_Page.ts
// Next.js 14: params 作为普通参数
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // ...
}

// Next.js 15: params 作为 Promise
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // ...
}
