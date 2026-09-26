/**
 * 把扁平列表（带 parentId）构造成带 children 的树（按 sortOrder 同级稳定排序）。
 * 调用方负责 sortOrder / parentId 字段存在（tree-table 自身不约束）。
 */
export function buildTree<T extends { id: string; parentId?: string | null; sortOrder?: number }>(
  flat: T[],
): Array<T & { children: T[] }> {
  // strip 任何已有 children（避免 flat 输入里出现循环引用）
  const safe = flat.map((m) => ({ ...m })) as Array<T & { children: T[] }>;
  const map = new Map<string, T & { children: T[] }>();
  safe.forEach((m) => {
    m.children = [];
    map.set(m.id, m);
  });
  const roots: Array<T & { children: T[] }> = [];
  safe.forEach((m) => {
    if (m.parentId && map.has(m.parentId)) {
      map.get(m.parentId)!.children.push(m);
    } else {
      roots.push(m);
    }
  });
  // 同级按 sortOrder 排序（null/undefined 视作 0）
  function sortRec(nodes: T[]) {
    (nodes as Array<T & { sortOrder?: number }>).sort(
      (a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0) || a.id.localeCompare(b.id),
    );
    nodes.forEach((n) => {
      const children = (n as unknown as { children?: T[] }).children;
      if (children?.length) sortRec(children);
    });
  }
  sortRec(roots);
  return roots;
}