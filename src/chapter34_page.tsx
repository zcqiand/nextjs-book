// 从第 34 章提取
// 代码清单: app/page.tsx
// 文件名: chapter34_page.tsx
// app/page.tsx
import { Suspense } from 'react';

export default function Page() {
  return (
    <div>
      {/* 静态部分 - 立即可用 */}
      <Hero />

      {/* 动态部分 - 渐进加载 */}
      <Suspense fallback={<Skeleton />}>
        <PersonalizedContent />
      </Suspense>
    </div>
  );
}
