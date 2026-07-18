"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
// ...shadcn 组件省略...

interface TenantRow {
  id: number;
  code: string;
  name: string;
  theme: string;
  createdAt: string;
}

export function TenantsClient({ initialTenants }: { initialTenants: TenantRow[] }) {
  const [tenants, setTenants] = useState<TenantRow[]>(initialTenants);
  const [search, setSearch] = useState("");
  const [deleting, setDeleting] = useState<TenantRow | null>(null);
  // ...

  const filtered = tenants.filter(
    (t) =>
      t.code.toLowerCase().includes(search.toLowerCase()) ||
      t.name.toLowerCase().includes(search.toLowerCase()),
  );

  async function handleConfirmDelete() {
    if (!deleting) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/api/tenants/${deleting.id}`, { method: "DELETE" });
      if (!res.ok) {
        const err = (await res.json().catch(() => ({}))) as { error?: string };
        toast.error(err.error ?? `删除失败 (${res.status})`);
        return;
      }
      setTenants(tenants.filter((t) => t.id !== deleting.id));
      toast.success(`租户 ${deleting.code} 已删除`);
      setDeleting(null);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "网络错误");
    } finally {
      setSubmitting(false);
    }
  }

  // ...渲染 Dialog / Table 略...
}