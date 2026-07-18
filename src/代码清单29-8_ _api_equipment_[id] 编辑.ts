import "server-only";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { equipment } from "@/db/schema";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse> {
  const { id } = await params;
  const existing = db.select().from(equipment).where(eq(equipment.id, id)).get();
  if (!existing) return NextResponse.json({ error: "设备不存在" }, { status: 404 });
  let body: { name?: string; model?: string | null; assetNo?: string | null; status?: "normal" | "maintenance" | "retired"; lastCalibratedAt?: string | null };
  try { body = await req.json(); } catch { return NextResponse.json({ error: "无效请求" }, { status: 400 }); }
  const updates: Record<string, unknown> = {};
  for (const k of ["name", "model", "assetNo", "status", "lastCalibratedAt"] as const) {
    if (body[k] !== undefined) updates[k] = body[k];
  }
  if (Object.keys(updates).length > 0) db.update(equipment).set(updates).where(eq(equipment.id, id)).run();
  return NextResponse.json({ ok: true });
}