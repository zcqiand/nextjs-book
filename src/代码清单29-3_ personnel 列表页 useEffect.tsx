// @entry M02.F02.I01  人员管理列表（菜单入口 data-fn）
useEffect(() => {
  void (async () => {
    const res = await fetch("/api/personnel");
    if (res.ok) setRows(((await res.json()) as { items: Person[] }).items);
  })();
}, []);