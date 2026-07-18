import "server-only";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { contracts } from "@/db/schema";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse> {
  const { id } = await params;
  const existing = db.select().from(contracts).where(eq(contracts.id, id)).get();
  if (!existing) return NextResponse.json({ error: "合同不存在" }, { status: 404 });

  let body: Record<string, string | null | undefined>;
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: "无效请求" }, { status: 400 });
  }

  const allowed: Array<keyof typeof contracts.$inferInsert> = [
    "clientUnit", "projectName", "projectLocation", "constructionUnit",
    "supervisionUnit", "witnessUnit", "witness", "witnessPhone",
    "contactPerson", "contactPhone", "entrustedDate", "contractCategory",
    "buildingUnit", "inspectionPerson", "inspectionPhone", "status",
  ];
  const updates: Record<string, unknown> = {};
  for (const k of allowed) {
    if (body[k] !== undefined) updates[k] = body[k];
  }
  if (updates.status !== undefined && updates.status !== "active" && updates.status !== "archived") {
    return NextResponse.json({ error: "status 非法" }, { status: 400 });
  }
  updates.updatedAt = new Date().toISOString().replace("T", " ").slice(0, 19);

  db.update(contracts).set(updates).where(eq(contracts.id, id)).run();
  return NextResponse.json(db.select().from(contracts).where(eq(contracts.id, id)).get());
}