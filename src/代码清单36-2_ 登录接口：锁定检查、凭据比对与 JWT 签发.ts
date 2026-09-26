  // M01.F04.I02：登录失败锁定（按 username 单独计）
  if (loginLockout.isLockedOut(username)) {
    return NextResponse.json(
      { code: "ACCOUNT_LOCKED", message: "Too many failed login attempts. Try again later." },
      { status: 429 },
    );
  }

  // sys_user 行（无 tenantId 列）
  const userRows = await db
    .select(/* ... */)
    .from(sysUser)
    .where(eq(sysUser.username, username))
    .limit(1);

  const user = userRows[0];
  const ok =
    user && user.password && (user.password === `plain:${password}` || user.password === password);

  if (!user || !ok) {
    loginLockout.recordFailure(username);
    return NextResponse.json(
      { code: "UNAUTHORIZED", message: "Invalid credentials" },
      { status: 401 },
    );
  }

  // 解析 tenant：取该用户首个 active membership（status=1）。
  // 2026-09-12 契约测试修复：必须确定性排序（tenant.created_at ASC + id tie-break），
  // 否则 PG 返回序不稳定，token tenant 会随机落到 globex → 全家族 401 tenant_id mismatch。
  const memberRows = await db
    .select({ tenantId: tenantMember.tenantId })
    .from(tenantMember)
    .innerJoin(tenant, eq(tenant.id, tenantMember.tenantId))
    .where(and(eq(tenantMember.userId, user.id), eq(tenantMember.status, 1)))
    .orderBy(asc(tenant.createdAt), asc(tenant.id))
    .limit(1);
  const tenantId = memberRows[0]?.tenantId;
  if (!tenantId) {
    return NextResponse.json(
      { code: "FORBIDDEN", message: "用户未关联任何 active tenant" },
      { status: 403 },
    );
  }

  // 确认 tenant 存在（且 active=1）
  const tRows = await db
    .select({ id: tenant.id, status: tenant.status })
    .from(tenant)
    .where(eq(tenant.id, tenantId))
    .limit(1);
  const tRow = tRows[0];
  if (!tRow || tRow.status !== 1) {
    loginLockout.recordFailure(username);
    return NextResponse.json(
      { code: "FORBIDDEN", message: `Tenant ${tenantId} 不可用` },
      { status: 403 },
    );
  }

  loginLockout.clearFailures(username);

  // ... availableTenants 真值链组装（略）

  const accessToken = await signToken({ sub: user.id, tenant_id: tRow.id });