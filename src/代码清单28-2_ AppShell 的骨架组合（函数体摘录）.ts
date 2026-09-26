export function AppShell({ children }: { children: React.ReactNode }) {
  const { token, user, clearToken } = useAuth();
  const { data: menus, loading: menusLoading } = useBackendMenus();
  // 应用名来自 saas 公共应用目录（/api/v1/clients/<clientId>），不写死在客户端
  const { app } = useSaasApp();

  return (
    <div className="min-h-screen flex bg-slate-50">
      {menusLoading ? (
        <aside
          className="w-64 shrink-0 border-r bg-white flex items-center justify-center"
          data-testid="appshell-menu-loading"
        >
          <span className="text-xs text-slate-500">菜单加载中…</span>
        </aside>
      ) : (
        <SidebarNav
          menus={menus ?? []}
          appCode={APP_CODE}
          appName={app?.name}
          footerExtras={<BackendBadge />}
        />
      )}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-14 bg-white border-b flex items-center px-6 gap-4">
          <h1 className="text-base font-semibold" data-testid="appshell-app-name">
            {app?.name ?? "建筑工程实验室管理系统"}
          </h1>
          <div className="ml-auto flex items-center gap-3 text-xs text-slate-500">
            {token ? (
              <>
                {/* 登录用户显示名（M00.F01.I01，/api/auth/me hydrate） */}
                <span
                  className="font-medium text-slate-900"
                  data-testid="user-display-name"
                  data-fn="M00.F01.I01"
                >
                  {/* || 而非 ??：saas 无显示名 → aspnetcore 落地 displayName=""，
                      ?? 对空串不回退 → 顶栏空白（2026-09-23 回归锁 header-session.dom） */}
                  {user?.displayName || user?.username || "…"}
                </span>
                {/* 租户切换（M00.F02.I01） */}
                <TenantSwitcher />
                <Button
                  variant="outline"
                  size="sm"
                  data-fn="M01.F05.I05"
                  data-testid="logout-button"
                  onClick={() => {
                    clearToken();
                    window.location.href = "/login";
                  }}
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  登出
                </Button>
              </>
            ) : (
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">去登录</Link>
              </Button>
            )}
          </div>
        </header>
        <section className="flex-1 overflow-auto p-6">{children}</section>
      </main>
    </div>
  );
}