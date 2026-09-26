// scripts/verify-flow-rejection.ts — 本地验证非法迁移被运行时拒绝
import { flowReducer, initialState } from "../src/state/flowReducer";

function check(name: string, actual: unknown, expected: unknown) {
  console.log(`${actual === expected ? "PASS" : "FAIL"} ${name} → ${String(actual)}`);
}

// 场景 1：draft 直接审批，admin 角色能过权限关，但转换表里没有这条边
const s1 = flowReducer(initialState, {
  type: "APPROVE", operator: "u-01", operatorRole: "admin",
});
check("错误信息", s1.error, "非法转换：draft → approved");
check("状态未变", s1.status, "draft");
check("无历史记录", s1.history.length, 0);

// 场景 2：一路合法推进到 review，再以非 admin 角色审批
let s2 = flowReducer(initialState, { type: "SUBMIT", operator: "u-01" });
s2 = flowReducer(s2, { type: "START_TESTING", operator: "u-01" });
s2 = flowReducer(s2, { type: "SUBMIT_REVIEW", operator: "u-01" });
s2 = flowReducer(s2, { type: "APPROVE", operator: "u-01", operatorRole: "member" });
check("错误信息", s2.error, "权限不足：APPROVE 需要 admin 角色");
check("状态停在 review", s2.status, "review");