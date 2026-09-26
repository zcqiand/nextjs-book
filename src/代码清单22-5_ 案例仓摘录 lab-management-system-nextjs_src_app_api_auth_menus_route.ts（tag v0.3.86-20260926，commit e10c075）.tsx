// 摘录说明：保留 import 块与完整的 GET 函数，文件顶部的数据链注释与工具函数从略
import { NextResponse } from "next/server";
import { cacheMenuSnapshot, getMenuSnapshot } from "@/lib/auth/menu-snapshot";
import { serviceLogin } from "@/app/api/auth/login/route";
import { requireEnv } from "@/lib/env-required";
import { subFromBearer } from "@/lib/auth/bearer";

export async function GET(request: Request) {
  const sub = subFromBearer(request.headers.get("authorization"));
  if (sub === null) {
    // ADR-0019：无 Bearer = 401，不再 fallback "USER-A" 走 demo 路径。
    return NextResponse.json(
      { code: "UNAUTHORIZED", message: "Bearer token required (ADR-0019)" },
      { status: 401 },
    );
  }
  const snapshot = getMenuSnapshot(sub);
  if (!snapshot) {
    // ……中段为菜单快照过期时的重拉自愈逻辑，属业务细节，此处不展开
  }
  return NextResponse.json(snapshot);
}