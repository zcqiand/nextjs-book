// 从第 7 章提取
// 代码清单: ProductPage 函数
// 文件名: chapter07_ProductPage.ts
export default async function ProductPage() {
  return (
    <div>
      <h1>产品详情</h1>

      {/* 第一层：产品信息 */}
      <Suspense fallback={<ProductSkeleton />}>
        <ProductInfo />

        {/* 第二层：嵌套的评论区 */}
        <Suspense fallback={<CommentSkeleton />}>
          <CommentList />
        </Suspense>
      </Suspense>
    </div>
  );
}
