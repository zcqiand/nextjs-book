export async function GET(req: NextRequest) {
  // token 化（2026-09-23）：此前 GET 无租户过滤，SSO 数据面桥双世界行全量返回
  //（lab_dev 6 行 = 两租户各 3 条）——「nextjs 显示 6 条重复」报障根因
  const auth = requireTenant(req);
  if (auth instanceof NextResponse) return auth;
  const url = new URL(req.url);
  const status = url.searchParams.get("status");
  const keyword = url.searchParams.get("keyword") ?? "";
  const page = Number(url.searchParams.get("page") ?? 1);
  const pageSize = Number(url.searchParams.get("pageSize") ?? 20);

  try {
    const items = await listContractsDb(auth.tenantId, {
      status: status ?? undefined,
      keyword: keyword || undefined,
    });
    return NextResponse.json(pageOf(items, page, pageSize));
  } catch (e) {
    if (isDbUnavailable(e)) {
      return NextResponse.json(
        { code: "DB_UNAVAILABLE", message: "检查 DATABASE_URL / npm run seed:db" },
        { status: 503 },
      );
    }
    throw e;
  }
}