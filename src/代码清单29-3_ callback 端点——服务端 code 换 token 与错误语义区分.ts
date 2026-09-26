      // 1. code 换 saas token（confidential client，secret 只在本服务端）
      let tokenRes: SaasTokenResponse;
      try {
        const res = await fetch(`${SAAS_BASE_URL()}/api/v1/oauth/token`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            grantType: "authorization_code",
            code: body.code,
            clientId: SAAS_CLIENT_ID(),
            clientSecret: SAAS_CLIENT_SECRET(),
            tenantId: SAAS_TENANT_ID(),
            redirectUri: body.redirect_uri,
          }),
          signal: AbortSignal.timeout(10_000),
        });
        tokenRes = (await res.json().catch(() => ({}))) as SaasTokenResponse;
        if (!res.ok || !tokenRes.accessToken) {
          // T11(2026-09-16)：saas 4xx（code 已用/不存在 → INVALID_GRANT）是契约面，
          // 返 401 给调用方；502 只留给 saas 5xx（基础设施故障）。此前一律 502，
          // 四方比对「code 不可用 → 2xx/4xx」在 nextjs 侧结构性失配（gate#3 实证）。
          const status = res.status >= 400 && res.status < 500 ? 401 : 502;
          return NextResponse.json(
            {
              code: status === 401 ? "SSO_INVALID_GRANT" : "SSO_TOKEN_FAILED",
              message: tokenRes.message ?? `saas token HTTP ${res.status}`,
            },
            { status },
          );
        }
      } catch (err) {
        return NextResponse.json(
          {
            code: "SSO_TOKEN_UNREACHABLE",
            message: `连不上 saas（${SAAS_BASE_URL()}）：${(err as Error).message}`,
          },
          { status: 502 },
        );
      }

      // ……（省略）……

      // 2. accessToken 拉当前用户（失败不阻塞登录，user/tenants 降级为最小信息）
      let me: SaasMe = {};
      try {
        const res = await fetch(`${SAAS_BASE_URL()}/api/v1/me`, {
          headers: { authorization: `Bearer ${tokenRes.accessToken}` },
          cache: "no-store",
          signal: AbortSignal.timeout(10_000),
        });
        if (res.ok) me = (await res.json()) as SaasMe;
      } catch {
        // /me 不可达：仍完成登录（token 已到手），只是身份信息缺省
      }

      // ……（省略）……

      return NextResponse.json({
        token: tokenRes.accessToken,
        refreshToken: tokenRes.refreshToken ?? "",
        user: {
          id: me.id ?? "unknown",
          username: me.email ?? "unknown",
          displayName: me.displayName ?? me.email ?? "未知用户",
          roleCode: me.memberships?.[0]?.roleIds?.[0] ?? "member",
        },
        tenants,
      });