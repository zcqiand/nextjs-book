import {
  pgTable,
  serial,
  text,
  bigint,
  index,
  uniqueIndex,
  foreignKey,
  uuid,
  varchar,
  timestamp,
  boolean,
  smallint,
  integer,
  unique,
  primaryKey,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// ………（中略约 360 行：__drizzle_migrations、oauth_access_token、oauth_client、
// oauth_code、oauth_refresh_token、sys_menu、sys_role、sys_role_menu、sys_user
// 各表定义）…………

export const tenant = pgTable(
  "tenant",
  {
    id: uuid()
      .default(sql`uuid_generate_v4()`)
      .primaryKey()
      .notNull(),
    tenantKey: varchar("tenant_key", { length: 64 }).notNull(),
    name: varchar({ length: 128 }).notNull(),
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
      ukTenantKey: uniqueIndex("uk_tenant_key").using("btree", table.tenantKey.asc().nullsLast()),
    };
  },
);