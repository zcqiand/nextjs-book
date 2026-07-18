import "server-only";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { equipment } from "@/db/schema";

export async function GET(req: Request): Promise<NextResponse> {
  const url = new URL(req.url);
  const keyword = url.searchParams.get("keyword")?.trim() ?? "";
  const statusFilter = url.searchParams.get("status") ?? "";
  let rows = db.select().from(equipment).all();
  if (keyword) {
    const k = keyword.toLowerCase();
    rows = rows.filter((e) => e.name.toLowerCase().includes(k) || (e.model ?? "").toLowerCase().includes(k) || (e.assetNo ?? "").toLowerCase().includes(k));
  }
  if (statusFilter) rows = rows.filter((e) => e.status === statusFilter);
  const items = rows.sort((a, b) => a.name.localeCompare(b.name));
  return NextResponse.json({ items, total: rows.length });
}

export async function POST(req: Request): Promise<NextResponse> {
  let body: { name?: string; model?: string; assetNo?: string; status?: "normal" | "maintenance" | "retired"; lastCalibratedAt?: string };
  try { body = await req.json(); } catch { return NextResponse.json({ error: "无效请求" }, { status: 400 }); }
  if (!body.name) return NextResponse.json({ error: "name 必填" }, { status: 400 });
  const id = `eq-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  db.insert(equipment).values({
    id, name: body.name, model: body.model ?? null, assetNo: body.assetNo ?? null,
    status: body.status ?? "normal", lastCalibratedAt: body.lastCalibratedAt ?? null,
  }).run();
  return NextResponse.json({ ok: true, id }, { status: 201 });
}