export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ tenantId: string; roleId: string }> },
): Promise<NextResponse> {
  try {
    const { tenantId, roleId } = await params;
    await verifyPathTenant(tenantId, req.headers.get("authorization"));
    const r = await ensureRole(tenantId, roleId);
    if (!r) {
      return NextResponse.json({ code: "NOT_FOUND", message: "Role not found" }, { status: 404 });
    }
    const parsed = SetBody.safeParse(await req.json().catch(() => null));
    if (!parsed.success) {
      return NextResponse.json({ code: "BAD_REQUEST", message: "Invalid body" }, { status: 400 });
    }
    // 整批替换改为单事务差量写（2026-09-12 并发 500 修复）：
    // 以前 delete 全量 + insert 两条独立 autocommit，四方并发 PUT 同一 role 会撞
    // 23505/deadlock。事务内 delete(差量) + insert(onConflictDoNothing) 幂等可并发。
    await db.transaction(async (tx) => {
      if (parsed.data.menuIds.length > 0) {
        await tx
          .delete(sysRoleMenu)
          .where(
            and(
              eq(sysRoleMenu.roleId, roleId),
              notInArray(sysRoleMenu.menuId, parsed.data.menuIds),
            ),
          );
        await tx
          .insert(sysRoleMenu)
          .values(parsed.data.menuIds.map((menuId) => ({ roleId, menuId })))
          .onConflictDoNothing();
      } else {
        await tx.delete(sysRoleMenu).where(eq(sysRoleMenu.roleId, roleId));
      }
    });

// ………（省略：事务成功后的响应返回与 catch 错误分支，见仓库原文 101-112 行）………