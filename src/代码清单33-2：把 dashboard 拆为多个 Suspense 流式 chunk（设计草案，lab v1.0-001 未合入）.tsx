/** 设计草案——非 lab 仓现有代码 */
import { Suspense } from "react";
import { CardSkeleton } from "@/components/ui/card-skeleton";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <WelcomeHeader />            {/* 服务端同步，不需 Suspense */}
      <Suspense fallback={<CardSkeleton rows={2} />}>
        <TodoBoard />              {/* 异步，慢，放 Suspense 里 */}
      </Suspense>
      <Suspense fallback={<CardSkeleton rows={4} />}>
        <RecentReports />          {/* 异步，中等，放独立 Suspense */}
      </Suspense>
    </div>
  );
}