import { beforeEach, describe, expect, it } from "vitest";
import { signSessionToken } from "@/lib/jwt";
import { getSessionUser, SESSION_COOKIE } from "@/lib/session";
import { resetAndSeed } from "./helpers";
import { POST as logoutPost } from "@/app/api/auth/logout/route";
import { fnTest } from "../fn";

beforeEach(async () => {
  await resetAndSeed();
});

describe("session user", () => {
  fnTest(["M01.F05.I02"], "resolves user + permissions for a valid token", async () => {
    const token = await signSessionToken({ sub: "u-admin", roleId: "role-admin" });
    const u = await getSessionUser(token);
    expect(u?.username).toBe("labadmin");
    expect(u?.permissions).toContain("user:delete");
  });

  fnTest(["M01.F05.I02"], "returns null for an invalid token", async () => {
    expect(await getSessionUser("not-a-jwt")).toBeNull();
  });

  it("returns null for a missing token", async () => {
    expect(await getSessionUser(null)).toBeNull();
  });

  fnTest(["M01.F05.I02"], "logout clears the session cookie", async () => {
    const res = await logoutPost();
    expect(res.status).toBe(200);
    const cookie = res.headers.get("set-cookie") ?? "";
    expect(cookie).toContain(`${SESSION_COOKIE}=;`);
    expect(cookie.toLowerCase()).toContain("max-age=0");
  });
});