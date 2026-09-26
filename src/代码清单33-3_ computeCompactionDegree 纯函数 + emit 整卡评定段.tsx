/** 干密度 / 压实度 / 评定。缺任一必需输入 → 该项为 0 / ''。 */
export function computeCompactionDegree(
  row: CompactionDegreeRow,
  maxDryDensity: number,
): { dryDensity: number; degree: number; verdict: "合格" | "不合格" | "" } {
  if (!(row.wetDensity > 0) || !(row.moisture >= 0)) {
    return { dryDensity: 0, degree: 0, verdict: "" };
  }
  const dryDensity = round(row.wetDensity / (1 + row.moisture / 100), 3);
  if (!(maxDryDensity > 0)) return { dryDensity, degree: 0, verdict: "" };
  const degree = round((dryDensity / maxDryDensity) * 100, 1);
  const verdict: "合格" | "不合格" | "" =
    row.designDegree > 0 ? (degree >= row.designDegree ? "合格" : "不合格") : "";
  return { dryDensity, degree, verdict };
}

// ...

  const emit = (next: ParsedState) => {
    const rows = next.rows.map((r) => ({
      ...r,
      ...computeCompactionDegree(r, next.maxDryDensity),
      maxDryDensity: next.maxDryDensity,
    }));
    // 整卡评定：任一行不合格即不合格；全部未录入则不上报 verdict（留给人工）
    const filled = rows.filter((r) => r.verdict !== "");
    const overall =
      filled.length === 0
        ? undefined
        : filled.every((r) => r.verdict === "合格")
          ? "合格"
          : "不合格";
    onChange({
      result: JSON.stringify({ maxDryDensity: next.maxDryDensity, rows }),
      ...(overall ? { verdict: overall } : {}),
    });
  };