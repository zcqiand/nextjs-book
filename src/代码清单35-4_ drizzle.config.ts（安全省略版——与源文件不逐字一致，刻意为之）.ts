// drizzle.config.ts — saas-identity-platform-nextjs DB-First config（ADR-0025 Phase 2）
//
// 设计：
// - nextjs 是消费方，不调 drizzle-kit generate（schema SSOT 在 shared 仓）
// - 仅用 drizzle-kit pull 从真库 introspect 生成 src/db/schema.ts
// - pull 输出入 git；CI drift 检测（pull-schema.sh）守 schema 与 DB 一致
//
// 与 shared 仓 drizzle.config.ts 区别：
// - shared: schema = ./src/db/schema.ts（手写 SSOT），out = ./drizzle（generate 产物）
// - nextjs: schema 不指定（pull 模式），introspect 输出到 src/db/schema.ts

import { defineConfig } from "drizzle-kit";

// ………（此处原为 PG_HOST / PG_PORT / PG_USER / PG_PASSWORD / PG_DATABASE 五行
// env 读取段。环境变量默认值从略——本清单为安全省略版，与源文件不逐字一致，
// 刻意为之：默认值含作者内网地址，不入书。）…………

const pgSsl = process.env.PG_SSL === "1";

export default defineConfig({
  dialect: "postgresql",
  schemaFilter: ["public"],
  dbCredentials: {
    host: pgHost,
    port: pgPort,
    user: pgUser,
    password: pgPassword,
    database: pgDatabase,
    ssl: pgSsl,
  },
  verbose: true,
  strict: true,
});