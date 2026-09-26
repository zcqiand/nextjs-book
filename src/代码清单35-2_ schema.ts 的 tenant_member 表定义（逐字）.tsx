export const tenantMember = pgTable(
  "tenant_member",
  {
    id: uuid()
      .default(sql`uuid_generate_v4()`)
      .primaryKey()
      .notNull(),
    tenantId: uuid("tenant_id").notNull(),
    userId: uuid("user_id").notNull(),
    memberName: varchar("member_name", { length: 64 }),
    isOwner: boolean("is_owner").default(false).notNull(),
    status: smallint().default(1).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => {
    return {
      idxTenantMemberTenantId: index("idx_tenant_member_tenant_id").using(
        "btree",
        table.tenantId.asc().nullsLast(),
      ),
      idxTenantMemberUserId: index("idx_tenant_member_user_id").using(
        "btree",
        table.userId.asc().nullsLast(),
      ),
      ukTenantUser: uniqueIndex("uk_tenant_user").using(
        "btree",
        table.tenantId.asc().nullsLast(),
        table.userId.asc().nullsLast(),
      ),
      tenantMemberTenantIdTenantIdFk: foreignKey({
        columns: [table.tenantId],
        foreignColumns: [tenant.id],
        name: "tenant_member_tenant_id_tenant_id_fk",
      }).onDelete("cascade"),
      tenantMemberUserIdSysUserIdFk: foreignKey({
        columns: [table.userId],
        foreignColumns: [sysUser.id],
        name: "tenant_member_user_id_sys_user_id_fk",
      }).onDelete("cascade"),
    };
  },
);