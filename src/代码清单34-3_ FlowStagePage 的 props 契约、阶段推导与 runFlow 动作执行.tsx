export interface FlowStagePageProps {
  /** 页面标题（如「报告审核」） */
  title: string;
  /** 本页面对应的流程阶段（不填则显示全部，不按阶段过滤；act 动作按 receiving 端点） */
  stage?: FlowStatus;
  /** 三态过滤器：有 stage 时默认 not_yet，无 stage 时默认 all */
  defaultFilter?: StageFilter;
  /** 标题右侧说明文字 */
  subtitle?: string;
  /** 标题栏右侧的自定义按钮（如「新建接样」） */
  toolbar?: (refresh: () => Promise<void>) => ReactNode;
  /** 每行「操作」列的自定义按钮（如「编辑」「录入结果」） */
  rowActions?: (r: SampleReceipt, refresh: () => Promise<void>) => ReactNode;
  /** 额外的数据列 */
  extraColumns?: { header: string; render: (r: SampleReceipt) => ReactNode }[];
  /** 提交按钮文案（默认「提交」） */
  submitLabel?: string;
  /** 是否允许提交（归档页默认关闭） */
  canSubmit?: boolean;
  /** 是否允许退回（接样页为首环节默认关闭） */
  canReturn?: boolean;
  /** 功能 ID（用于 data-fn 入口标记），格式 Mxx.Fyy.Izz */
  dataFn?: string;
  /** 三态过滤器的 data-fn ID，如 M03.F01.I06 */
  filterDataFn?: string;
  /** 行级「查看详情」按钮的 data-fn ID，如 M03.F05.I02 */
  viewDataFn?: string;
  /** 行级「提交/退回」按钮的 data-fn ID，如 M03.F05.I07（审核通过/批准/发放/归档等共用） */
  actionDataFn?: string;
  /** 下一阶段的自定义标签（用于「提交后进入」文案覆盖，如 issuance→已归档） */
  nextStageLabel?: string;
}
// ...
  const stageIdx = stage ? FLOW_STAGE_ORDER.indexOf(stage) : -1;
  const nextStage = stage
    ? (FLOW_STAGE_ORDER[stageIdx + 1] as FlowStatus | undefined)
    : undefined;
  const prevStage = stage
    ? (FLOW_STAGE_ORDER[stageIdx - 1] as FlowStatus | undefined)
    : undefined;
  const allowSubmit = canSubmit ?? Boolean(nextStage);
  const allowReturn = canReturn ?? Boolean(prevStage);
// ...
  const runFlow = async (action: FlowAction, ids: string[]) => {
    if (ids.length === 0) return;
    if (!operator) {
      setError("未登录：缺少操作人身份，无法执行流程操作");
      return;
    }
    setProcessing(true);
    setError(null);
    setNotice(null);
    try {
      // M03 7 阶段全 act 模式（ADR-0035）：按本页 stage 调对应 act 端点，
      // 后端 stage-guard 校验单据必须停在本阶段；响应是 FlowActionResult[] 裸数组。
      // completed 是终态只读视图（无 act 端点，7 阶段全 act 模式不含它），
      // 收窄到 Exclude<FlowStatus, "completed"> 与 ACT_BY_STAGE 键集对齐。
      const act =
        ACT_BY_STAGE[(stage ?? "receiving") as Exclude<FlowStatus, "completed">];
      const results = await act({ action, ids, operator });
      const failed = results.filter((r) => !r.ok);
      const okCount = results.length - failed.length;
      const actionLabel =
        action === "submit" ? "提交" : action === "return" ? "退回" : "撤回";
      if (okCount > 0) setNotice(`已${actionLabel} ${okCount} 条`);
      if (failed.length > 0) setError(failed.map((f) => f.message).join("；"));
      await refresh();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "操作失败");
    } finally {
      setProcessing(false);
    }
  };