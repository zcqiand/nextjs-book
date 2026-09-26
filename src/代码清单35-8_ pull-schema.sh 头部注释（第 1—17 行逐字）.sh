#!/usr/bin/env bash
# scripts/pull-schema.sh — drizzle-kit pull 从真库反推 src/db/schema.ts（DB-First, ADR-0025）
#
# 设计：
# - 共享 shared 仓是真源（schema-first）；shared 跑 db:migrate 应用到 DB
# - nextjs 跑 drizzle-kit pull 把 DB 结构反推为 src/db/schema.ts
# - drizzle-kit pull 默认输出到 drizzle/schema.ts（不在 src/db/）；本脚本 move + cleanup
# - 生成的 schema.ts 入 git；CI 检测 drift（与 git HEAD 对比）
# - 漂移即 exit 1，强制 schema.ts 必须显式 commit（防止本地与 CI 不一致）
#
# 用法：
#   bash scripts/pull-schema.sh                       # pull from saas_dev
#   PG_DATABASE=saas_test bash scripts/pull-schema.sh
#
# 退出码：
#   0 — pulled OK + 与 git HEAD 一致
#   1 — pull 失败 或 与 git HEAD 有 diff（需手动 commit）