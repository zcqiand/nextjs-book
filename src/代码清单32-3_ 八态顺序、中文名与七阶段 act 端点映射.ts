/** 流程阶段顺序（前进 = 提交，后退 = 退回/撤回） */
export const FLOW_STAGE_ORDER: FlowStatus[] = [
  "receiving",
  "task_assignment",
  "data_entry",
  "review",
  "approval",
  "issuance",
  "archived",
  "completed",
];

/** 流程阶段中文名 */
export const FLOW_STAGE_LABELS: Record<FlowStatus, string> = {
  receiving: "接样中",
  task_assignment: "分配中",
  data_entry: "录入中",
  review: "审核中",
  approval: "批准中",
  issuance: "发放中",
  archived: "归档中",
  completed: "已归档",
};

/** 7 阶段 act 端点生成函数签名（body/response 与契约 FlowActionRequest/FlowActionResult 对齐） */
type ActFn = (body: FlowActionRequest) => Promise<FlowActionResult[]>;

/**
 * 页面 stage（FlowStatus）→ 对应的 7 阶段 act 端点生成函数
 * （M03 7 阶段全 act 模式，ADR-0035；后端按路径 stage 做 stage-guard——
 * 单据必须停在该阶段才能 submit/return）。completed 是终态展示值，无 act 端点。
 */
export const ACT_BY_STAGE: Record<Exclude<FlowStatus, "completed">, ActFn> = {
  receiving: receiptsActFlowReceiving,
  task_assignment: receiptsActFlowAssigning,
  data_entry: receiptsActFlowDataEntry,
  review: receiptsActFlowReview,
  approval: receiptsActFlowApprove,
  issuance: receiptsActFlowIssuance,
  archived: receiptsActFlowArchived,
};