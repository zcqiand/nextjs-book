import { describe, expect } from "vitest";
import { NextRequest } from "next/server";
import { signSessionToken } from "@/lib/jwt";
import { middleware } from "@/middleware";
import { fnTest } from "../fn";

function makeReq(cookie?: string): NextRequest {
  const headers = new Headers();
  if (cookie) headers.set("cookie", cookie);
  return new NextRequest(new URL("http://localhost/"), { headers });
}

describe("middleware guard", () => {
  fnTest(["M01.F04.I02"], "redirects to /login when no cookie", async () => {
    const res = await middleware(makeReq());
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toBe("http://localhost/login");
  });

  fnTest(["M01.F04.I02"], "redirects when token is invalid", async () => {
    const res = await middleware(makeReq("lab_session=garbage"));
    expect(res.status).toBe(307);
  });

  fnTest(["M01.F04.I02"], "passes through with a valid token", async () => {
    const token = await signSessionToken({ sub: "u-admin", roleId: "role-admin" });
    const res = await middleware(makeReq(`lab_session=${token}`));
    expect(res.status).toBe(200);
  });
});