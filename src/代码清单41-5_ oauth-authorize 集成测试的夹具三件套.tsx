/** 登录页真实形状：契约 4 必填字段，无 tenantId（saas 三前端 login 跳板分支都不传）。 */
const loginPageBody = {
  clientId: "lab-management",
  redirectUri: "http://localhost:5201/login",
  responseType: "code" as const,
  scope: "lab.read lab.write",
  state: "xyz-state",
};

/** oauth_client.redirect_uris 在 DB 是 csv 文本（9/7 重组 text[]→varchar）。 */
const REDIRECT_CSV =
  "http://localhost:5201/callback,http://localhost:5201/login,http://localhost:5202/login";

function makeReq(body: unknown, authHeader?: string): Request {
  const headers: Record<string, string> = { "content-type": "application/json" };
  if (authHeader) headers.authorization = authHeader;
  return new Request("http://localhost/api/v1/oauth/authorize", {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
}

async function bearerToken(claims: Record<string, unknown> = {}): Promise<string> {
  return await signTestToken({
    sub: USER_ID,
    tenant_id: TENANT_ID,
    ...claims,
  });
}