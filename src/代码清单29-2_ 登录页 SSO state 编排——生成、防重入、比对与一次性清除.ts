    // 生成 OAuth 2.0 state（防 CSRF，RFC 6749 §10.12）
    function generateOauthState(): string {
      const bytes = new Uint8Array(32);
      crypto.getRandomValues(bytes);
      return btoa(String.fromCharCode(...bytes))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
    }

    // ……（省略）……

      const [status, setStatus] = useState<string>("检查登录态...");
      // SSO authorize 防重入：StrictMode dev 双调 effect、依赖（apiMode/token）变化都会
      // 重跑下方 effect；第二次 setItem 会覆盖第一个 state → saas 回跳比对必失败
      // （「state 校验失败（可能 session 过期或被攻击）」）。一次登录流程只发一次。
      const ssoStartedRef = useRef(false);
      // callback POST 已发起（本页生命周期内）。state 一次性清除后，StrictMode 第二次
      // effect / 依赖重跑会走「state 缺失」分支 —— 若此时首发的 callback 还在途，
      // 不能自愈重启（会跳转 saas 打断在途登录），静默返回即可。
      const callbackStartedRef = useRef(false);

    // ……（省略）……

      const startAuthorize = () => {
        // 防重入（ssoStartedRef）：StrictMode dev 双调 effect、依赖变化重跑时，
        // 第二次 setItem 会覆盖第一个 state → saas 回跳比对必失败。
        if (ssoStartedRef.current) return;
        ssoStartedRef.current = true;
        setStatus(`未登录，正在跳 saas（backend=${apiMode}）...`);
        const csrfState = generateOauthState();
        sessionStorage.setItem(SSO_STATE_STORAGE_KEY, csrfState);
        sessionStorage.setItem(SSO_FLOW_BACKEND_KEY, baseUrl);
        authSsoAuthorize(
          {
            response_type: "code",
            client_id: OAUTH_CLIENT_ID,
            redirect_uri: computeRedirectUri(),
            state: csrfState,
          },
          { baseURL: baseUrl },
        )
          .then((res) => {
            const data = res as { authorizeUrl?: string };
            const authorizeUrl = data?.authorizeUrl;
            console.log("[lab/login] authorizeUrl=", authorizeUrl);
            if (authorizeUrl) {
              window.location.href = authorizeUrl;
            } else {
              setStatus("authorizeUrl 缺失，请检查 msw / saas 配置");
              sessionStorage.removeItem(SSO_STATE_STORAGE_KEY);
              ssoStartedRef.current = false;
            }
          })
          .catch((err: unknown) => {
            console.error("[lab/login] authSsoAuthorize failed:", err);
            setStatus(`authorize 调用失败（${apiMode}）：${(err as Error).message}`);
            sessionStorage.removeItem(SSO_STATE_STORAGE_KEY);
            ssoStartedRef.current = false; // 失败后允许重试
          });
      };

    // ……（省略）……

      // 1. URL 带 code+state（saas OAuth 2.0 回调） → 验 state → POST callback → 存 token → 跳 /
      const code = url.searchParams.get("code");
      const stateParam = url.searchParams.get("state");
      const fromParam = url.searchParams.get("from");
      if (code && stateParam) {
        const expectedState = sessionStorage.getItem(SSO_STATE_STORAGE_KEY);
        const flowBackend = sessionStorage.getItem(SSO_FLOW_BACKEND_KEY);
        if (!expectedState || expectedState !== stateParam) {
          if (callbackStartedRef.current) return;
          sessionStorage.removeItem(SSO_STATE_STORAGE_KEY);
          cleanCallbackParams();
          restartAuthorize("state 校验失败（登录流程已过期）");
          return;
        }

        // ……（省略）……

        // state 一次性：验证通过立即清掉（也兜住 StrictMode 双调不二次 POST）
        sessionStorage.removeItem(SSO_STATE_STORAGE_KEY);
        callbackStartedRef.current = true;
        setStatus("拿到 saas code，正在换 token...");
        authSsoCallback(
          {
            grant_type: "authorization_code",
            code,
            redirect_uri: computeRedirectUri(),
            // RFC 6749 §4.1.3 + shared 契约四字段：state 原样回传（后端 cookie 校验 CSRF）
            state: stateParam,
          },
          { baseURL: baseUrl },
        )
          .then((resp) => {
            const data = resp as { token?: string };
            if (data.token) {
              sessionStorage.removeItem(SSO_RESTART_COUNT_KEY);
              setToken(data.token);
              cleanCallbackParams();
              router.replace(fromParam ?? "/");
            } else {
              restartAuthorize("code 换 token 失败：响应无 token");
            }
          })
          .catch(() => restartAuthorize("code 换 token 失败"));
        return;
      }