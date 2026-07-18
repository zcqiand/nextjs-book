// @entry M02.F03.I01  设备管理列表
useEffect(() => {
  void (async () => {
    const res = await fetch("/api/equipment");
    if (res.ok) setRows(((await res.json()) as { items: Equip[] }).items);
  })();
}, []);