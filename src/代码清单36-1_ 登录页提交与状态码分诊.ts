  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!loginClientId) {
      toast.error("缺少 clientId：请通过 OAuth 跳转访问，或配置 NEXT_PUBLIC_LOGIN_CLIENT_ID");
      return;
    }
    setSubmitting(true);
    try {
      const res = await loginMut.mutateAsync({
        data: { username, password, clientId: loginClientId },
      });
      const data: LoginResponse | undefined = res.data;
      if (!data?.accessToken || !data.refreshToken) {
        toast.error("登录响应缺少 token，请联系管理员");
        return;
      }
      login({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        userId: data.user?.id ?? "",
        username,
        email: data.user?.email,
        currentTenantId: data.availableTenants?.[0]?.tenantId ?? "",
        tenantCode: null,
      });
      // ... setTimeout(0) 内：OAuth 回跳分支 / OAuth 跳板分支 / router.push("/tenants")
    } catch (err) {
      const apiErr = toApiError(err);
      // M01.F04.I02 - 423 (aspnetcore) / 429 (nextjs Route Handler) =
      // 失败 5 次锁定（后端 15min 自动解锁）
      const msg =
        apiErr.status === 423 || apiErr.status === 429
          ? "账号已被锁定，请 15 分钟后再试"
          : apiErr.status === 401
            ? "用户名或密码错误"
            : apiErr.status === 0
              ? // 显示实际请求目标（选择器可切，env 标签会误导）：未选择 = env 默认
                `后端不可达（${getSelectedBackend() || `${apiMode}·env 默认`}）：${apiErr.message}`
              : apiErr.message;
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  }