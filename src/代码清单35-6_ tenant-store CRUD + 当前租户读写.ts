export function listTenants(): Tenant[] {
  return db.select().from(tenants).all();
}

export function getTenant(id: number): Tenant | null {
  return db.select().from(tenants).where(eq(tenants.id, id)).get() ?? null;
}

export function createTenant(input: Omit<NewTenant, "id" | "createdAt">): Tenant {
  const inserted = db.insert(tenants).values(input).returning().get();
  return inserted;
}

export function updateTenant(
  id: number,
  patch: Partial<Pick<NewTenant, "name" | "theme">>,
): Tenant | null {
  const existing = getTenant(id);
  if (!existing) return null;
  const merged: NewTenant = { ...existing, ...patch };
  db.update(tenants)
    .set({ name: merged.name, theme: merged.theme })
    .where(eq(tenants.id, id))
    .run();
  return getTenant(id);
}

export function setCurrentTenant(id: number): void {
  currentTenantId = id;
}

export function getCurrentTenant(): Tenant | null {
  if (currentTenantId === null) return null;
  return getTenant(currentTenantId);
}