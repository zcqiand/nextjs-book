import { beforeEach, describe, expect, vi } from "vitest";
import { signSessionToken } from "@/lib/jwt";
import { resetAndSeed } from "./helpers";
import { fnTest } from "../fn";

beforeEach(async () => {
  await resetAndSeed();
  vi.resetModules();
});

describe("requirePermission", () => {
  fnTest(["M01.F04.I01"], "admin passes a user:delete check", async () => {
    const token = await signSessionToken({ sub: "u-admin", roleId: "role-admin" });
    vi.doMock("@/lib/cookie-io", () => ({ readSessionCookie: () => token }));
    const { requirePermission } = await import("@/lib/auth-server");
    const u = await requirePermission("user:delete");
    expect(u.username).toBe("labadmin");
  });

  fnTest(["M01.F04.I01"], "technician is denied user:delete with 403", async () => {
    const token = await signSessionToken({ sub: "u-tech", roleId: "role-tech" });
    vi.doMock("@/lib/cookie-io", () => ({ readSessionCookie: () => token }));
    const { requirePermission } = await import("@/lib/auth-server");
    await expect(requirePermission("user:delete")).rejects.toMatchObject({ status: 403 });
  });
});