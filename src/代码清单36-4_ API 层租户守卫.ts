/**
 * 校验 :tenantId 与 JWT claim 一致。
 *
 * @param pathTenantId - URL 路径参数；null 表示本 endpoint 不需要 tenant scope
 * @param authHeader - 原始 Authorization header（不是 Bearer token）
 * @returns JwtClaims（让 caller 后续用 sub / email 等）
 * @throws TenantGuardError 当：
 *   - pathTenantId 给出但 JWT 无 tenant_id claim
 *   - JWT tenant_id 与 pathTenantId 不一致
 *   - JWT 缺失 / 解析失败 / 验签失败
 */
export async function verifyPathTenant(
  pathTenantId: string | null,
  authHeader: string | null | undefined,
): Promise<JwtClaims> {
  let claims: JwtClaims | null;
  try {
    claims = await claimsFromAuthHeader(authHeader);
  } catch (e) {
    // 验签失败（jose 抛 JwtParseError）→ 统一转为 TenantGuardError 401
    const msg = e instanceof Error ? e.message : String(e);
    throw new TenantGuardError(`Invalid Bearer token: ${msg}`);
  }
  if (!claims) {
    throw new TenantGuardError("Missing or invalid Bearer token");
  }

  if (pathTenantId === null) {
    // 不需要 tenant scope 的端点（如 /api/v1/me、/api/v1/auth/login）；只要 JWT 存在即可
    return claims;
  }

  const tokenTenantId = claims.tenant_id;
  if (!tokenTenantId) {
    throw new TenantGuardError("JWT missing tenant_id claim");
  }

  if (tokenTenantId !== pathTenantId) {
    throw new TenantGuardError(`tenant_id mismatch: path=${pathTenantId} token=${tokenTenantId}`);
  }

  return claims;
}