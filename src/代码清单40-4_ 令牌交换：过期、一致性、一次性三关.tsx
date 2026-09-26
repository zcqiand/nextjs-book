    if (new Date(row.expiresAt).getTime() <= Date.now()) {
      await db.delete(oauthCode).where(eq(oauthCode.id, row.id));
      return NextResponse.json({ code: "INVALID_GRANT", message: "code 已过期" }, { status: 400 });
    }
    if (row.redirectUri !== body.redirectUri) {
      // RFC 6749 §4.1.3：redirect_uri 必须与 authorize 时一致；不一致即撤销 code
      await db.delete(oauthCode).where(eq(oauthCode.id, row.id));
      return NextResponse.json(
        { code: "INVALID_GRANT", message: "redirectUri 与 authorize 时不一致" },
        { status: 400 },
      );
    }
    // 一次性消费：删 code 行（msw/springboot/aspnetcore 同款，重放 → 上方 not found）
    await db.delete(oauthCode).where(eq(oauthCode.id, row.id));
    const accessToken = await signToken({
      sub: row.userId,
      tenant_id: row.tenantId,
      scope: row.scope ?? undefined,
    });
    const refreshToken = generateRefreshToken(row.userId);
    oauthStore.putRefresh(refreshToken, {
      clientId: row.clientId,
      userId: row.userId,
      tenantId: row.tenantId,
      scope: row.scope ?? "",
    });