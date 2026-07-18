export const tenantUsers = sqliteTable(
  "tenant_users",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    tenantId: integer("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    /** per-tenant role："admin" | "member" | "viewer"（D5 决策） */
    role: text("role").notNull().default("member"),
    joinedAt: text("joined_at").notNull().default(sql`(datetime('now'))`),
  },
);