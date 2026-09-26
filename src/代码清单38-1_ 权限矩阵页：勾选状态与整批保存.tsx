  const { tenantId, roleId } = use(params);

// ………（省略：应用列表与各应用菜单分组查询 groupsQ，见仓库原文 28-54 行）………

  const grantQ = useTenantRoleMenusListSysRoleMenus(tenantId, roleId, { clientId: "" } as never);
  const saveMut = useTenantRoleMenusSetSysRoleMenus();

  const [granted, setGranted] = useState<Set<string>>(new Set());

  useEffect(() => {
    const ids = grantQ.data?.data?.menuIds ?? [];
    setGranted(new Set(ids));
  }, [grantQ.data]);

  function toggle(id: string) {
    const next = new Set(granted);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setGranted(next);
  }

  function clearAll() {
    setGranted(new Set());
  }

  async function save() {
    try {
      await saveMut.mutateAsync({
        tenantId,
        roleId,
        data: { menuIds: Array.from(granted) },
        params: { clientId: "" } as never,
      });
      grantQ.refetch();
      toast.success("菜单授权已保存");
    } catch (err) {
      toast.error(`保存失败：${toApiError(err).message}`);
    }
  }

// ………（省略：PageHeader 装配与按应用分组的勾选卡片渲染，见仓库原文 91-100 行）………

        actions={
          <div className="flex gap-2">
            <Button variant="outline" data-fn="M00.F04.I04" onClick={clearAll}>
              清空
            </Button>
            <Button data-fn="M00.F04.I03" disabled={saveMut.isPending} onClick={save}>
              {saveMut.isPending ? "保存中…" : `保存 (${granted.size})`}
            </Button>
          </div>
        }

// ………（省略：勾选卡片列表与当前授权摘要卡，见仓库原文 111-158 行）………