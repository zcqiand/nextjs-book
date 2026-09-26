      const memberRoles = await db
        .select({ roleId: tenantMemberRole.roleId })
        .from(tenantMemberRole)
        .where(inArray(tenantMemberRole.memberId, memberIds));
      const roleIds = Array.from(new Set(memberRoles.map((r) => r.roleId)));
      if (roleIds.length > 0) {
        const grants = await db
          .select({ menuId: sysRoleMenu.menuId })
          .from(sysRoleMenu)
          .where(inArray(sysRoleMenu.roleId, roleIds));
        for (const g of grants) allowed.add(g.menuId);
      }

// ………（省略：拉取全部 active 应用与全部启用菜单的两次查询，见仓库原文 89-114 行）………

    const byId = new Map(allRows.map((m) => [m.id, m]));
    const included = new Set<string>();
    for (const id of allowed) {
      let cur = byId.get(id);
      while (cur && !included.has(cur.id)) {
        included.add(cur.id);
        cur = cur.parentId && cur.parentId !== ROOT_PARENT_ID ? byId.get(cur.parentId) : undefined;
      }
    }