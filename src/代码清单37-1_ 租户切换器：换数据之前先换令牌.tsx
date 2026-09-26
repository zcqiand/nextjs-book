  const membershipsQ = useQuery({
    queryKey: ["meListMyTenants"],
    queryFn: async () => (await meListMyTenants({ clientId: "" })).data,
  });
  const tenantsQ = useQuery({
    queryKey: ["adminTenantsListTenants"],
    queryFn: async () => (await adminTenantsListTenants()).data.items,
  });

  const memberships = membershipsQ.data ?? [];
  const nameById = new Map((tenantsQ.data ?? []).map((t) => [t.id, t.name]));
  const tenantKeyById = new Map((tenantsQ.data ?? []).map((t) => [t.id, t.tenantKey]));

  const current = memberships.find((m) => m.tenantId === currentTenantId);

  async function onSwitch(tenantId: string) {
    try {
      const res = await meSwitchTenant(tenantId, { clientId: "" });
      setTenant(tenantId, null, res.data.accessToken);
      void qc.invalidateQueries(); // 租户切换后列表数据全部失效
      router.push(`/tenants/${tenantId}/members`);
    } catch (err) {
      const apiErr = toApiError(err);
      toast.error(
        apiErr.status === 404 ? "该租户不存在或你不是其成员" : `切换失败：${apiErr.message}`,
      );
    }
  }