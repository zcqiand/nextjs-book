import "server-only";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { personnel } from "@/db/schema";

export async function GET(req: Request): Promise<NextResponse> {
  const url = new URL(req.url);
  const keyword = url.searchParams.get("keyword")?.trim() ?? "";
  const statusFilter = url.searchParams.get("status") ?? "";
  let rows = db.select().from(personnel).all();
  if (keyword) {
    const k = keyword.toLowerCase();
    rows = rows.filter((p) => p.name.toLowerCase().includes(k) || (p.roleTitle ?? "").toLowerCase().includes(k));
  }
  if (statusFilter) rows = rows.filter((p) => p.status === statusFilter);
  const items = rows.sort((a, b) => a.name.localeCompare(b.name));
  return NextResponse.json({ items, total: rows.length });
}

export async function POST(req: Request): Promise<NextResponse> {
  let body: { name?: string; roleTitle?: string; phone?: string; certNo?: string; status?: "active" | "disabled" };
  try { body = await req.json(); } catch { return NextResponse.json({ error: "无效请求" }, { status: 400 }); }
  if (!body.name) return NextResponse.json({ error: "name 必填" }, { status: 400 });
  const id = `p-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  db.insert(personnel).values({
    id, name: body.name, roleTitle: body.roleTitle ?? null,
    phone: body.phone ?? null, certNo: body.certNo ?? null,
    status: body.status ?? "active",
  }).run();
  return NextResponse.json({ ok: true, id }, { status: 201 });
}