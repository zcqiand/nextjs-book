/**
 * GET /forbidden —— 403 无权限页。
 *
 * 故意放在 (protected) route group 之外：只走根 layout，不读 session、
 * 不注入权限。middleware 仍然对它生效（不在 PUBLIC_PATHS 里），
 * 因此只有已认证用户能到达这里——无权限但已登录，正是 403 的语义。
 */
export default function ForbiddenPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center">
        <p className="text-2xl font-semibold">403 — 无权限</p>
        <p className="mt-2 text-muted-foreground">你没有访问该页面的权限。</p>
      </div>
    </main>
  );
}