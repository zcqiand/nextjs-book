export const inspectionBrands = pgTable(
  "inspection_brands",
  {
    code: text().primaryKey().notNull(),
    inspectionObjectCode: text("inspection_object_code"),
    name: text().notNull(),
    remark: text(),
    sortOrder: integer("sort_order").default(0).notNull(),
    createdAt: text("created_at").default("").notNull(),
    updatedAt: text("updated_at").default("").notNull(),
    tenantId: text("tenant_id").default("").notNull(),
  },
  (table) => {
    return {
      idxBrandsTenant: index("idx_brands_tenant").using(
        "btree",
        table.tenantId.asc().nullsLast().op("text_ops"),
      ),
      idxBrandsTenantCode: uniqueIndex("idx_brands_tenant_code").using(
        "btree",
        table.tenantId.asc().nullsLast().op("text_ops"),
        table.code.asc().nullsLast().op("text_ops"),
      ),