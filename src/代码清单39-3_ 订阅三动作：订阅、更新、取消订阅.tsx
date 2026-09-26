  async function onSubscribe(values: Record<string, unknown>) {
    try {
      await subscribeMut.mutateAsync({
        tenantId,
        data: {
          clientId: String(values.clientId ?? "").trim(),
          expireTime: values.expireTime ? String(values.expireTime) : undefined,
        } as SubscribeTenantApplicationRequest,
      });
      setSubscribeOpen(false);
      list.refetch();
      toast.success("应用已订阅");
    } catch (err) {
      toast.error(`订阅失败：${toApiError(err).message}`);
    }
  }

  async function onUpdate(values: Record<string, unknown>) {
    if (!editTarget) return;
    try {
      await updateMut.mutateAsync({
        tenantId,
        clientId: editTarget.clientId,
        data: {
          status: Number(values.status),
          expireTime: values.expireTime ? String(values.expireTime) : undefined,
        } as UpdateTenantApplicationRequest,
      });
      setEditTarget(null);
      list.refetch();
      toast.success("订阅已更新");
    } catch (err) {
      toast.error(`更新失败：${toApiError(err).message}`);
    }
  }

  async function confirmRemove() {
    if (!removeTarget) return;
    try {
      await removeMut.mutateAsync({ tenantId, clientId: removeTarget.clientId });
      setRemoveTarget(null);
      list.refetch();
      toast.success("订阅已取消");
    } catch (err) {
      toast.error(`取消失败：${toApiError(err).message}`);
    }
  }