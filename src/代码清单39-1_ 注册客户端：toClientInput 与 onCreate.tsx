function toClientInput(values: Record<string, unknown>): Record<string, unknown> {
  return {
    icon: values.icon ? String(values.icon) : undefined,
    sortOrder: Number(values.sortOrder ?? 0),
    status: Number(values.status ?? 1),
    isFirstParty: Boolean(values.isFirstParty),
    // 契约 CreateOAuthClientRequest 必填：clientId/clientName/clientSecret/grantTypes/redirectUris
    clientId: String(values.clientId ?? "").trim(),
    clientName: String(values.clientName ?? "").trim(),
    clientSecret: `sec-${Math.random().toString(36).slice(2, 14)}`,
    grantTypes: "authorization_code,client_credentials",
    redirectUris: "",
    scopes: values.scopesText
      ? String(values.scopesText)
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
          .join(",")
      : "",
  };
}

// ………（省略：页面 hooks 与列表状态，见仓库原文 110-123 行）………

  async function onCreate(values: Record<string, unknown>) {
    try {
      await createMut.mutateAsync({
        data: toClientInput(values) as never,
      });
      setCreateOpen(false);
      list.refetch();
      toast.success("应用已创建");
    } catch (err) {
      toast.error(`创建失败：${toApiError(err).message}`);
    }
  }