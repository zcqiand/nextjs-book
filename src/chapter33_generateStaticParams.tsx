// 从第 33 章提取
// 代码清单: 静态生成 generateStaticParams
// 文件名: chapter33_generateStaticParams.tsx
// app/products/[category]/[id]/page.tsx

// 静态生成 + ISR（60秒重新验证）
export const revalidate = 60;

// 指定预渲染路径
export async function generateStaticParams() {
  const products = await db.product.findMany({
    select: { category: true, id: true },
  });

  return products.map(p => ({
    category: p.category,
    id: p.id,
  }));
}
