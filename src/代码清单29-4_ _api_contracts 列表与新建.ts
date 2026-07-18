import "server-only";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { contracts } from "@/db/schema";

export async function GET(req: Request): Promise<NextResponse> {
  const url = new URL(req.url);
  const keyword = url.searchParams.get("keyword")?.trim() ?? "";
  const statusFilter = url.searchParams.get("status") ?? "";
  const page = Math.max(1, Number(url.searchParams.get("page") ?? "1"));
  const pageSize = Math.min(100, Math.max(1, Number(url.searchParams.get("pageSize") ?? "20")));
  const offset = (page - 1) * pageSize;

  let rows = db.select().from(contracts).all();
  if (keyword) {
    const k = keyword.toLowerCase();
    rows = rows.filter((c) =>
      c.contractCode.toLowerCase().includes(k) ||
      c.clientUnit.toLowerCase().includes(k) ||
      c.projectName.toLowerCase().includes(k),
    );
  }
  if (statusFilter) rows = rows.filter((c) => c.status === statusFilter);

  const items = rows
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(offset, offset + pageSize);
  return NextResponse.json({ items, total: rows.length });
}