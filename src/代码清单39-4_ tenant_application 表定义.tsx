export const tenantApplication = pgTable(
  "tenant_application",
  {
    id: uuid()
      .default(sql`uuid_generate_v4()`)
      .primaryKey()
      .notNull(),
    tenantId: uuid("tenant_id").notNull(),
    clientId: varchar("client_id", { length: 64 }).notNull(),
    status: smallint().default(1).notNull(),
    expireTime: timestamp("expire_time", { withTimezone: true, mode: "string" }),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => {
    return {
      idxTenantApplicationClientId: index("idx_tenant_application_client_id").using(
        "btree",
        table.clientId.asc().nullsLast(),
      ),
      ukTenantClient: uniqueIndex("uk_tenant_client").using(
        "btree",
        table.tenantId.asc().nullsLast(),
        table.clientId.asc().nullsLast(),
      ),
      tenantApplicationTenantIdTenantIdFk: foreignKey({
        columns: [table.tenantId],
        foreignColumns: [tenant.id],
        name: "tenant_application_tenant_id_tenant_id_fk",
      }).onDelete("cascade"),
      tenantApplicationClientIdOauthClientClientIdFk: foreignKey({
        columns: [table.clientId],
        foreignColumns: [oauthClient.clientId],
        name: "tenant_application_client_id_oauth_client_client_id_fk",
      }).onDelete("cascade"),
    };
  },
);