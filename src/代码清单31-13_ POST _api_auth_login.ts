export async function POST(req: Request): Promise<NextResponse> {
  let body: { username?: unknown; password?: unknown };
  try {
    body = (await req.json()) as { username?: unknown; password?: unknown };
  } catch {
    return NextResponse.json({ error: "无效请求" }, { status: 400 });
  }

  const username = typeof body.username === "string" ? body.username : undefined;
  const password = typeof body.password === "string" ? body.password : undefined;
  if (!username || !password) {
    return NextResponse.json({ error: "用户名或密码缺失" }, { status: 400 });
  }

  const user = db.select().from(users).where(eq(users.username, username)).get();
  const ok = user?.status === "active" && (await verifyPassword(password, user.passwordHash));
  if (!user || !ok) {
    return NextResponse.json({ error: "用户名或密码错误" }, { status: 401 });
  }

  const token = await signSessionToken({ sub: user.id, roleId: user.roleId });
  const res = NextResponse.json({
    ok: true,
    user: { id: user.id, displayName: user.displayName },
  });
  res.cookies.set(SESSION_COOKIE, token, cookieOptions);
  return res;
}