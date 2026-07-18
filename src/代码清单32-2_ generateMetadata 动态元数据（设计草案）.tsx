import type { Metadata } from "next";
import { db } from "@/db";
import { contracts } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> },
): Promise<Metadata> {
  const { id } = await params;
  const row = db.select().from(contracts).where(eq(contracts.id, id)).get();
  if (!row) return { title: { absolute: "未找到" }, robots: { index: false } };
  return {
    title: row.contractCode,
    description: `${row.clientUnit} - ${row.projectName}`,
    robots: { index: false, follow: false }, // 合同详情走内网，不让爬虫抓
  };
}