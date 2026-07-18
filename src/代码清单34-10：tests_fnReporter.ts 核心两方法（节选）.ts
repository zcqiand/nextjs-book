/**
 * vitest 适配器：把 fnTest 的标记落成 suite 契约的 .state/trace.json。
 *
 * 同时实现 v2 的 onFinished 与 v3+ 的 onTestRunEnd。vitest 只会调用它认识的那个。
 * 版本耦合是适配器的活，不该泄漏到 suite 或项目里。
 *
 * 契约：inert=true 的测试，fns 必须为空数组。
 * 被 skip 的测试不会执行，meta 永远写不进去 —— 假绿在物理上不可能。
 */
export default class FnReporter {
  /** vitest >= 3 */
  onTestRunEnd(testModules: readonly ReportedModule[]): void {
    if (process.env.TRACE_MAP !== "1") return;
    const tests: TraceEntry[] = [];
    for (const mod of testModules) {
      for (const t of mod.children.allTests()) {
        const inert = t.result().state === "skipped";
        tests.push({
          test: `${mod.moduleId}::${t.name}`,
          fns: clean(t.meta().fn, inert),
          inert,
        });
      }
    }
    emit(tests);
  }

  /** vitest 2 */
  onFinished(files: LegacyFile[] = []): void {
    if (process.env.TRACE_MAP !== "1") return;
    if (
      typeof (this as { onTestRunEnd?: unknown }).onTestRunEnd === "function" &&
      files.length === 0
    ) {
      return; // v3+ 已经在 onTestRunEnd 写过了
    }
    const tests: TraceEntry[] = [];
    const walk = (task: LegacyTask, filepath: string): void => {
      if (task.type === "suite") {
        for (const child of task.tasks ?? []) walk(child, filepath);
        return;
      }
      const inert =
        task.mode === "skip" || task.mode === "todo" || task.result?.state === "skip";
      tests.push({
        test: `${filepath}::${task.name}`,
        fns: clean(task.meta?.fn, inert),
        inert,
      });
    };
    for (const f of files) for (const t of f.tasks) walk(t, f.filepath);
    emit(tests);
  }
}