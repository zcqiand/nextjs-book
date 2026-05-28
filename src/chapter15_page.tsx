// 从第 15 章提取
// 代码清单: 迁移前
// 文件名: chapter15_Page.tsx
// 迁移前
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
}

// 迁移后
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
}
