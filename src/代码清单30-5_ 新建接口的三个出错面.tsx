export async function POST(req: NextRequest) {
  const auth = requireTenant(req);
  if (auth instanceof NextResponse) return auth;
  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  // ADR-0019 + T11（2026-09-16）：租户身份取 token 的 tenant_id claim（requireTenant），
  // 不收 body.tenantId —— createContractDb 以显式参数 stamp，body 传入值被忽略。
  // …（newContract 字段强转组装略）
  // 缺必填字段 → 400
  if (
    !newContract.contractCode ||
    !newContract.clientUnit ||
    !newContract.projectName ||
    !newContract.constructionUnit ||
    !newContract.witnessUnit ||
    !newContract.witness
  ) {
    return NextResponse.json(
      {
        code: "BAD_REQUEST",
        message:
          "contractCode / clientUnit / projectName / constructionUnit / witnessUnit / witness are required",
      },
      { status: 400 },
    );
  }
  try {
    const row = await createContractDb(auth.tenantId, newContract);
    // 响应行来自 PG returning：未填可空列是 null 不是 undefined —— 与
    // aspnetcore DTO 物化形状对齐（POST shape 四方比对，buildingUnit 等列）。
    return NextResponse.json(row, { status: 201 });
  } catch (e) {
    if (isDbUnavailable(e)) {
      return NextResponse.json(
        { code: "DB_UNAVAILABLE", message: "检查 DATABASE_URL / npm run seed:db" },
        { status: 503 },
      );
    }
    if ((e as { code?: string }).code === "23505") {
      return NextResponse.json(
        { code: "BAD_REQUEST", message: "contractCode already exists for tenant" },
        { status: 400 },
      );
    }
    throw e;
  }
}