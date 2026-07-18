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