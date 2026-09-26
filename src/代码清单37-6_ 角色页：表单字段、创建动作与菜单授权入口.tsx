// PERMISSION_OPTIONS 已废止（role_permissions 表 DROP，M00.F04.I01 仅 springboot 仓实现）

const FIELDS: FieldDef[] = [
  { name: "roleCode", label: "Code", required: true, placeholder: "admin" },
  { name: "roleName", label: "名称", required: true, placeholder: "管理员" },
];

const EDIT_FIELDS = FIELDS.filter((f) => f.name !== "roleCode");

// ………（省略：组件装配、租户名异步获取与角色列表查询，见仓库原文 44-64 行）………

  async function onCreate(values: Record<string, unknown>) {
    try {
      await createMut.mutateAsync({
        tenantId,
        data: { ...(values as unknown as CreateSysRoleRequest), clientId: "saas-console" },
      });
      setCreateOpen(false);
      list.refetch();
      toast.success("角色已创建");
    } catch (err) {
      toast.error(`创建失败：${toApiError(err).message}`);
    }
  }

// ………（省略：onUpdate、confirmDelete 与表格渲染，见仓库原文 80-142 行）………

                      {/* 权限矩阵按钮已废止（role_permissions 表 DROP，setPermissions endpoint 整体删） */}
                      <Button variant="ghost" size="sm" data-fn="M00.F04.I02" asChild>
                        <Link href={`/tenants/${tenantId}/roles/${r.id}/menus`}>菜单授权</Link>
                      </Button>

// ………（省略：编辑、删除按钮与三个弹窗，见仓库原文 147-205 行）………