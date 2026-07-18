  fnTest(["M05.F01.I03"], "I03 切换登录 Tab 调 GET /api/audit-logs?tab=login", async () => {
    const filtered = [initialLogs[0]!];
    const fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify(filtered), { status: 200 }),
    );
    const { getByTestId, getAllByTestId } = render(
      <AuditLogsClient initialLogs={initialLogs} />,
    );
    fireEvent.click(getByTestId("audit-tab-login"));
    await waitFor(() => expect(fetchSpy).toHaveBeenCalledTimes(2));
    const lastCall = fetchSpy.mock.calls[fetchSpy.mock.calls.length - 1] as [string];
    expect(lastCall[0]).toContain("/api/audit-logs");
    expect(lastCall[0]).toContain("tab=login");
    await waitFor(() => expect(getAllByTestId("audit-log-row").length).toBe(1));
  });

  fnTest(["M05.F01.I06"], "I06 查询按钮带 operator 参数调 GET /api/audit-logs", async () => {
    const filtered = [initialLogs[0]!];
    const fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify(filtered), { status: 200 }),
    );
    const { getByTestId } = render(<AuditLogsClient initialLogs={initialLogs} />);
    fireEvent.change(getByTestId("audit-operator-search"), {
      target: { value: "alice" },
    });
    const buttons = Array.from(document.querySelectorAll("button"));
    const queryBtn = buttons.find((b) => b.textContent?.includes("查询"));
    expect(queryBtn).toBeTruthy();
    fireEvent.click(queryBtn!);
    await waitFor(() => expect(fetchSpy).toHaveBeenCalled());
    const lastCall = fetchSpy.mock.calls[fetchSpy.mock.calls.length - 1] as [string];
    expect(lastCall[0]).toContain("operator=alice");
  });

  fnTest(["M05.F01.I07"], "I07 导出按钮调 POST /api/audit-logs", async () => {
    const csvSpy = vi.spyOn(global, "fetch").mockImplementation(async (input) => {
      const url = typeof input === "string" ? input : (input as Request).url;
      if (url.endsWith("/api/audit-logs") || url.includes("/api/audit-logs?")) {
        return new Response("[]", { status: 200 });
      }
      return new Response("id,action\n1,login", { status: 200 });
    });
    const createObjectURL = vi.fn(() => "blob:fake");
    const revokeObjectURL = vi.fn();
    Object.defineProperty(URL, "createObjectURL", {
      value: createObjectURL,
      writable: true,
    });
    Object.defineProperty(URL, "revokeObjectURL", {
      value: revokeObjectURL,
      writable: true,
    });
    const clickSpy = vi
      .spyOn(HTMLAnchorElement.prototype, "click")
      .mockImplementation(() => undefined);

    const { getByTestId } = render(<AuditLogsClient initialLogs={initialLogs} />);
    fireEvent.click(getByTestId("export-audit-csv-btn"));
    await waitFor(() => expect(csvSpy).toHaveBeenCalled());
    const postCall = csvSpy.mock.calls.find(
      (call) => {
        const init = call[1] as RequestInit | undefined;
        return init != null && init.method === "POST";
      },
    ) as [string, RequestInit] | undefined;
    expect(postCall).toBeTruthy();
    expect(postCall![0]).toBe("/api/audit-logs");
    expect(clickSpy).toHaveBeenCalled();

    clickSpy.mockRestore();
  });
});