// @entry M01.F01.I11 类型契约(tenant) — tenants + tenant_users + sso_states 三表
export const tenants = sqliteTable("tenants", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  code: text("code").notNull().unique(),
  name: text("name").notNull(),
  theme: text("theme").notNull().default("default"),
  createdAt: text("created_at").notNull().default(sql`(datetime('now'))`),
});