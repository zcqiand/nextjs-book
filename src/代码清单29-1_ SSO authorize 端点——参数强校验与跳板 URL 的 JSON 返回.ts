    export async function GET(request: Request) {
      const url = new URL(request.url);
      // ADR-0019：response_type / state 是 OAuth 安全关键参数,client 控制;
      // 缺失必须 400,不允许 fallback (state ?? "mock-state" 过去是 CSRF 防御绕过)。
      const responseType = url.searchParams.get("response_type");
      const redirectUri = url.searchParams.get("redirect_uri");
      const state = url.searchParams.get("state");
      if (!responseType || !state) {
        return NextResponse.json(
          { code: "BAD_REQUEST", message: "response_type and state are required" },
          { status: 400 },
        );
      }

      if (!redirectUri) {
        return NextResponse.json(
          { code: "BAD_REQUEST", message: "redirect_uri is required" },
          { status: 400 },
        );
      }
      if (responseType !== "code") {
        return NextResponse.json(
          { code: "UNSUPPORTED_RESPONSE_TYPE", message: "仅支持 response_type=code" },
          { status: 400 },
        );
      }

      // 拼 saas 登录页跳板 URL：state/redirect_uri 原样透传 + client_id（RFC 6749
      // §4.1.1——saas LoginPage 跳板分支靠它触发 authorize）。code 由用户在 saas
      // 登录后由 saas 前端带 session 领取，本端点不预拿（2026-09-15 家族收敛）。
      const saasUrl = new URL("/login", SAAS_UI_BASE_URL());
      saasUrl.searchParams.set("redirect_uri", redirectUri);
      saasUrl.searchParams.set("state", state);
      saasUrl.searchParams.set("client_id", SAAS_CLIENT_ID());

      return NextResponse.json({
        authorizeUrl: saasUrl.toString(),
        state,
      });
    }