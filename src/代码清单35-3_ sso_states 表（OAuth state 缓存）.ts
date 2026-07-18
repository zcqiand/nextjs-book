export const ssoStates = sqliteTable("sso_states", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  state: text("state").notNull().unique(),
  code: text("code"),
  tenantId: integer("tenant_id").references(() => tenants.id),
  userId: integer("user_id"),
  expiresAt: text("expires_at").notNull(),
});