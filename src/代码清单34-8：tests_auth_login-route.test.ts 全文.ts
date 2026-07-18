import { beforeEach, describe, expect, it } from "vitest";
import { POST } from "@/app/api/auth/login/route";
import { resetAndSeed } from "./helpers";
import { fnTest } from "../fn";

beforeEach(async () => {
  await resetAndSeed();
});

describe("POST /api/auth/login", () => {
  fnTest(["M01.F05.I01"], "sets session cookie on correct credentials", async () => {
    const req = new Request("http://localhost/api/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username: "labadmin", password: "lab123" }),
    });
    const res = await POST(req as never);
    expect(res.status).toBe(200);
    const cookie = res.headers.get("set-cookie") ?? "";
    expect(cookie).toContain("lab_session=");
    expect(cookie.toLowerCase()).toContain("httponly");
  });

  fnTest(["M01.F05.I01"], "rejects wrong password with 401", async () => {
    const req = new Request("http://localhost/api/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username: "labadmin", password: "wrong" }),
    });
    const res = await POST(req as never);
    expect(res.status).toBe(401);
    expect(res.headers.get("set-cookie")).toBeNull();
  });

  it("rejects unknown user with 401", async () => {
    const req = new Request("http://localhost/api/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username: "nobody", password: "lab123" }),
    });
    const res = await POST(req as never);
    expect(res.status).toBe(401);
  });
});