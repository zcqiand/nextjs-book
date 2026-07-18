describe("M05.F01 audit logs page", () => {
  fnTest(["M05.F01.I01"], "页面根挂 data-fn M05.F01.I01", () => {
    const { getByTestId } = render(<AuditLogsClient initialLogs={initialLogs} />);
    expect(getByTestId("audit-logs-page").getAttribute("data-fn")).toBe("M05.F01.I01");
  });

  fnTest(["M05.F01.I01"], "初始渲染 3 行", () => {
    const { getAllByTestId } = render(<AuditLogsClient initialLogs={initialLogs} />);
    expect(getAllByTestId("audit-log-row").length).toBe(3);
  });

  fnTest(["M05.F01.I02"], "I02 全部 Tab 挂 data-fn M05.F01.I02", () => {
    const { getByTestId } = render(<AuditLogsClient initialLogs={initialLogs} />);
    expect(getByTestId("audit-tab-all").getAttribute("data-fn")).toBe("M05.F01.I02");
  });

  fnTest(["M05.F01.I03"], "I03 登录日志 Tab 挂 data-fn M05.F01.I03", () => {
    const { getByTestId } = render(<AuditLogsClient initialLogs={initialLogs} />);
    expect(getByTestId("audit-tab-login").getAttribute("data-fn")).toBe("M05.F01.I03");
  });

  fnTest(["M05.F01.I04"], "I04 操作日志 Tab 挂 data-fn M05.F01.I04", () => {
    const { getByTestId } = render(<AuditLogsClient initialLogs={initialLogs} />);
    expect(getByTestId("audit-tab-operation").getAttribute("data-fn")).toBe("M05.F01.I04");
  });

  fnTest(["M05.F01.I05"], "I05 安全日志 Tab 挂 data-fn M05.F01.I05", () => {
    const { getByTestId } = render(<AuditLogsClient initialLogs={initialLogs} />);
    expect(getByTestId("audit-tab-security").getAttribute("data-fn")).toBe("M05.F01.I05");
  });
});