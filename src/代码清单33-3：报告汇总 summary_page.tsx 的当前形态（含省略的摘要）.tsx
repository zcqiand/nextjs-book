"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Summary {
  overview: { reportCategoryCount: number; technicalRequirementCount: number; testStandardCount: number; testParameterCount: number };
  byCategory: Array<{ code: string; name: string; reportCount: number; passRate: number | null }>;
}

// @entry M05.F01.I01  报告汇总入口
export default function SummaryPage() {
  const [data, setData] = useState<Summary | null>(null);

  useEffect(() => {
    void (async () => {
      const res = await fetch("/api/summary");
      if (res.ok) setData((await res.json()) as Summary);
    })();
  }, []);

  if (!data) return <p className="text-muted-foreground">加载中…</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">报告汇总</h1>
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="报告类别" value={data.overview.reportCategoryCount} />
        <StatCard title="技术要求" value={data.overview.technicalRequirementCount} />
        <StatCard title="检测标准" value={data.overview.testStandardCount} />
        <StatCard title="检测参数" value={data.overview.testParameterCount} />
      </div>
      <Card>
        <CardHeader><CardTitle>按报告类别汇总</CardTitle></CardHeader>
        {/* 按类别渲染与 passRate 三态徽标（> 80% / < 60% / 缺失） */}
        …
      </Card>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <Card>
      <CardHeader><CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle></CardHeader>
      <CardContent><div className="text-3xl font-bold">{value}</div></CardContent>
    </Card>
  );
}