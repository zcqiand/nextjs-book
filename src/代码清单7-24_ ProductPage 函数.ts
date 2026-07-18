import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function ProductPage() {
  return (
    <ErrorBoundary fallback={<p>商品信息加载失败，请稍后重试。</p>}>
      <Suspense fallback={<ProductSkeleton />}>
        <ProductInfo />
      </Suspense>
    </ErrorBoundary>
  );
}