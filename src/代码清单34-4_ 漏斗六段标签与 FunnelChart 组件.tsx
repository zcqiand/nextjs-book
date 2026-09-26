const FUNNEL_LABELS: Array<{
  key: keyof DashboardStats["funnelByStage"];
  label: string;
}> = [
  { key: "pending_collect", label: "待取样" },
  { key: "received", label: "已收样" },
  { key: "testing", label: "试验中" },
  { key: "reporting", label: "报告编制" },
  { key: "reviewing", label: "待审核" },
  { key: "issued", label: "已签发" },
];
// ...
// ——— FunnelChart 子组件（水平条形 + 累计计数）———
function FunnelChart({ counts }: { counts: DashboardStats["funnelByStage"] }) {
  const total = FUNNEL_LABELS.reduce((acc, s) => acc + counts[s.key], 0);
  if (total === 0) {
    return (
      <div
        data-testid="funnel-empty"
        className="text-sm text-slate-500 border rounded p-4 bg-white"
      >
        当前无任务
      </div>
    );
  }
  // 漏斗视觉：按段比例画水平条，宽度逐段递减
  const stageCount = FUNNEL_LABELS.length;
  return (
    <div data-testid="funnel-bars" className="border rounded bg-white p-4 space-y-2">
      {FUNNEL_LABELS.map((s, i) => {
        const count = counts[s.key];
        // 漏斗宽度：从 100% 线性递减到 50%（视觉漏斗感）
        const widthPct = 100 - (i * 50) / (stageCount - 1);
        const ratio = count / total;
        return (
          <div
            key={s.key}
            data-testid={`funnel-stage-${s.key}`}
            className="flex items-center gap-3"
          >
            <div className="w-20 text-xs text-slate-600 shrink-0">{s.label}</div>
            <div className="flex-1 h-7 bg-slate-100 rounded relative overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all"
                style={{ width: `${(ratio * widthPct).toFixed(2)}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-end pr-2 text-xs tabular-nums">
                {count} 项
              </div>
            </div>
          </div>
        );
      })}
      <div className="text-xs text-slate-500 pt-1">合计 {total} 项</div>
    </div>
  );
}