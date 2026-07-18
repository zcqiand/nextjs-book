// src/middleware.ts
//
// ADR-0001 边缘短路：middleware 跑在 Edge runtime，只做 jose 验签 + 过期检查。
// 它**不**查库（getSessionUser 留给 route handler / server action 在 Node runtime 跑）。
//
// Edge-import-safety 决策：
//   `SESSION_COOKIE` 常量物理上住在 `@/lib/session`，但那个文件顶层 import 了
//   `drizzle-orm` / `@/db`（better-sqlite3 + server-only），把它们拖进 edge bundle 会炸。
//   tree-shaking 在 Next middleware 的 edge 编译里**不保证**剔除带副作用顶层 import 的模块，
//   所以这里不 import `@/lib/session`，而是把 cookie 名内联成 const。
//   cookie 名是 ADR-0001 锁死的稳定契约（login route / cookie-io 都写同一字面量），
//   `@/lib/session.ts` 与 `@/lib/cookie-io.ts` 同样钉死 "lab_session"，三处一致。
//   只依赖 `jose`（经 `@/lib/jwt` 的 verifySessionToken）+ `next/server`，全是 edge-safe。
import { NextResponse, type NextRequest } from "next/server";
import { verifySessionToken } from "@/lib/jwt";

const SESSION_COOKIE = "lab_session";
const PUBLIC_PATHS = ["/login"];

// @entry M01.F04.I02  路由守卫：未登录/凭据失效 → 重定向 /login（三态拦截之「未登录」）
export async function middleware(req: NextRequest): Promise<NextResponse> {
  const { pathname } = req.nextUrl;
  if (PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return NextResponse.next();
  }
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const payload = await verifySessionToken(token ?? "");
  if (!payload) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/login";
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  // 排除 /login、/api/auth/*、Next 静态资源、favicon —— 这些路径不过 middleware，
  // 登录/登出本身在没有 session 时也必须可达。
  matcher: ["/((?!login|api/auth|_next/static|_next/image|favicon.ico).*)"],
};