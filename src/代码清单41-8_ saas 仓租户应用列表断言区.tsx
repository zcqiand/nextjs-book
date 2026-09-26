  it("列表行渲染应用名称（join admin-clients）+ 状态中文标签", async () => {
    const params = (await Promise.resolve({
      tenantId: "abc",
    })) as unknown as Parameters<typeof TenantApplicationsListPage>[0]["params"];
    render(
      <TestProviders>
        <TenantApplicationsListPage params={params} />
      </TestProviders>,
    );
    await screen.findByText("建筑工程实验室管理系统");
    expect(screen.getByText("企业资源计划系统")).toBeTruthy();
    expect(screen.getAllByTestId("tenant-app-row")).toHaveLength(2);
    expect(screen.getByText("启用")).toBeTruthy();
    expect(screen.getByText("待激活")).toBeTruthy();
  });