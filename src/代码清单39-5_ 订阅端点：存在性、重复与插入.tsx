// ………（省略：路由声明、verifyPathTenant 前置与 zod 解析，见仓库原文 61-74 行）………
    const { clientId, expireTime } = body.data;
    // FK tenant_application.client_id → oauth_client.client_id：未知 client 直接 400（否则 DB FK 500）
    const client = await db
      .select({ clientId: oauthClient.clientId })
      .from(oauthClient)
      .where(eq(oauthClient.clientId, clientId))
      .limit(1);
    if (!client[0]) {
      return NextResponse.json({ code: "NOT_FOUND", message: "Unknown clientId" }, { status: 404 });
    }
    const dup = await db
      .select({ id: tenantApplication.id })
      .from(tenantApplication)
      .where(
        and(eq(tenantApplication.tenantId, tenantId), eq(tenantApplication.clientId, clientId)),
      )
      .limit(1);
    if (dup[0]) {
      return NextResponse.json(
        { code: "CONFLICT", message: "already subscribed" },
        { status: 409 },
      );
    }
    const inserted = await db
      .insert(tenantApplication)
      .values({
        tenantId,
        clientId,
        status: 1,
        expireTime: expireTime ?? null,
      })
      .returning();
    return NextResponse.json(toView(inserted[0]!), { status: 201 });