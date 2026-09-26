export const tenantMemberRole = pgTable(
  "tenant_member_role",
  {
    memberId: uuid("member_id").notNull(),
    roleId: uuid("role_id").notNull(),
  },
  (table) => {
    return {
      idxTenantMemberRoleRoleId: index("idx_tenant_member_role_role_id").using(
        "btree",
        table.roleId.asc().nullsLast(),
      ),
      tenantMemberRoleMemberIdTenantMemberIdFk: foreignKey({
        columns: [table.memberId],
        foreignColumns: [tenantMember.id],
        name: "tenant_member_role_member_id_tenant_member_id_fk",
      }).onDelete("cascade"),
      tenantMemberRoleRoleIdSysRoleIdFk: foreignKey({
        columns: [table.roleId],
        foreignColumns: [sysRole.id],
        name: "tenant_member_role_role_id_sys_role_id_fk",
      }).onDelete("cascade"),
      tenantMemberRoleMemberIdRoleIdPk: primaryKey({
        columns: [table.memberId, table.roleId],
        name: "tenant_member_role_member_id_role_id_pk",
      }),
    };
  },
);