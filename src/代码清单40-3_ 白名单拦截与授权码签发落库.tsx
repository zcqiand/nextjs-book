  if (!redirectUriAllowed(app.redirectUris, body.redirectUri)) {
    return NextResponse.json(
      { code: "INVALID_REDIRECT_URI", message: "redirectUri 不在该 client 的白名单" },
      { status: 400 },
    );
  }

  // Bearer sub 必须是 saas 真用户（msw oracle「session user not found」→ 401 同款）
  const userRows = await db
    .select({ id: sysUser.id })
    .from(sysUser)
    .where(eq(sysUser.id, userId))
    .limit(1);
  if (!userRows[0]) {
    return unauthorized("session user not found");
  }

  const code = generateAuthCode();
  const ttl = Number(process.env.OAUTH_CODE_TTL) || 600; // 秒；aspnetcore 同款 10min
  await db.insert(oauthCode).values({
    code,
    // FK → oauth_client.client_id（code 形字符串）；行 UUID 会 23503
    clientId: body.clientId,
    userId,
    tenantId,
    redirectUri: body.redirectUri,
    scope: body.scope,
    expiresAt: new Date(Date.now() + ttl * 1000).toISOString(),
  });

  return NextResponse.json({ code, state: body.state });