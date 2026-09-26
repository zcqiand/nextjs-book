  // 同步 hydrate：组件 mount 时从 localStorage 读，避免 SSR/CSR mismatch
  useEffect(() => {
    try {
      const stored = localStorage.getItem(TOKEN_KEY);
      if (stored) setTokenState(stored);
    } catch {
      // localStorage 不可用（隐私模式等）—— silently ignore
    }
  }, []);

  // ……（省略）……

  // 会话信息 hydrate：有 token 且无 user → GET /api/auth/me
  // （M00.F01：顶栏 displayName + TenantSwitcher 的数据源）
  useEffect(() => {
    if (!token || user || hydrating.current) return;
    hydrating.current = true;
    authGetCurrentUser({
      headers: { Authorization: `Bearer ${token}` },
      baseURL: getApiBaseUrl(),
    })
      .then((session) => {
        setUser(session.user);
        setTenants(session.tenants ?? []);
        setCurrentTenantId(
          session.currentTenantId ?? session.tenants?.[0]?.tenantId ?? null,
        );
      })
      .catch(() => {
        // /me 失败（快照 miss / 后端不可达）：不阻断 UI，顶栏显示占位。
        // 401 重定向语义由 useBackendMenus 统一处理，这里不重复。
      })
      .finally(() => {
        hydrating.current = false;
      });
  }, [token, user]);

  // ……（省略）……

  const setToken = useCallback((next: string | null) => {
    setTokenState(next);
    try {
      if (next) localStorage.setItem(TOKEN_KEY, next);
      else localStorage.removeItem(TOKEN_KEY);
    } catch {
      // ignore
    }
  }, []);

  const clearToken = useCallback(() => {
    setToken(null);
    setUser(null);
    setTenants([]);
    setCurrentTenantId(null);
  }, [setToken]);