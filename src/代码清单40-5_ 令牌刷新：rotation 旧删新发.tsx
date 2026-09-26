  const entry = oauthStore.rotateRefresh(body.refreshToken);
  if (!entry) {
    return NextResponse.json(
      { code: "INVALID_GRANT", message: "refreshToken 不存在或已被使用" },
      { status: 400 },
    );
  }
  const accessToken = await signToken({
    sub: entry.userId,
    tenant_id: entry.tenantId,
    scope: entry.scope,
  });
  const newRefresh = generateRefreshToken(entry.userId);
  oauthStore.putRefresh(newRefresh, entry);

  return NextResponse.json({
    accessToken,
    refreshToken: newRefresh,
    tokenType: "Bearer",
    expiresIn: 3600,
    scope: entry.scope,
    // T11(2026-09-16) SSOT TokenResponse 必填三件回显（三方共库 UUID 逐字相等）。
    userId: entry.userId,
    clientId: entry.clientId,
    tenantId: entry.tenantId,
  });