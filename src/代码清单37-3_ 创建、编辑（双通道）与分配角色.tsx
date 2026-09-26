  async function onCreate(values: Record<string, unknown>) {
    try {
      await createMut.mutateAsync({
        tenantId,
        data: values as unknown as CreateSysUserRequest,
      });
      setCreateOpen(false);
      usersQ.refetch();
      toast.success("用户已创建");
    } catch (err) {
      toast.error(`创建失败：${toApiError(err).message}`);
    }
  }

  async function onUpdate(values: Record<string, unknown>) {
    if (!editTarget) return;
    try {
      // 5.13-①（2026-09-20 人裁）：email 走 PATCH（契约 UpdateSysUserRequest 已无 status），
      // status 走专职 /status 端点（与 react UserListPage 同款双通道）。
      await updateMut.mutateAsync({
        tenantId,
        userId: editTarget.id,
        data: { email: values.email as string } as UpdateSysUserRequest,
      });
      const nextStatus = values.status as MemberUserRow["status"];
      if (nextStatus && nextStatus !== editTarget.status) {
        await tenantMembersChangeTenantUserStatus(tenantId, editTarget.id, {
          status: nextStatus as TenantMembersChangeTenantUserStatusBody["status"],
        });
      }
      setEditTarget(null);
      usersQ.refetch();
      toast.success("用户已更新");
    } catch (err) {
      toast.error(`更新失败：${toApiError(err).message}`);
    }
  }

  async function onAssignRoles(values: Record<string, unknown>) {
    if (!roleTarget) return;
    const roleIds = Array.isArray(values.roleIds) ? (values.roleIds as string[]) : [];
    try {
      await roleAssignMut.mutateAsync({
        tenantId,
        userId: roleTarget.id,
        data: { roleIds },
      });
      setRoleTarget(null);
      usersQ.refetch();
      toast.success("角色已分配");
    } catch (err) {
      toast.error(`角色分配失败：${toApiError(err).message}`);
    }
  }