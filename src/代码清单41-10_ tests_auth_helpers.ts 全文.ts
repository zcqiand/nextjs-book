import { db } from "@/db";
import { roles, users } from "@/db/schema";
import { runSeed } from "@/db/seed";

/**
 * 每个 route 测试前清库 + seed，保证确定性。
 *
 * 清表顺序与 tests/db/seed.test.ts 一致：先 users（引用方）再 roles（被引用方），
 * 这样 runSeed 走完整 insert 而不是 onConflictDoUpdate 的 update 分支。
 */
export function resetAndSeed() {
  db.delete(users).run();
  db.delete(roles).run();
  return runSeed(db);
}