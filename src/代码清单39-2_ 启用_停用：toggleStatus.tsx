  async function toggleStatus(a: AppRow) {
    try {
      await statusMut.mutateAsync({
        clientId: a.clientId,
        data: { status: statusIsActive(a.status) ? 0 : 1 },
      } as never);
      list.refetch();
      toast.success("状态已切换");
    } catch (err) {
      toast.error(`状态切换失败：${toApiError(err).message}`);
    }
  }