  fnTest(["M04.F01.I03"], "I03 提交 Dialog 调 POST /api/apps 并把新应用加进列表", async () => {
    const created = {
      id: 99,
      code: "ci",
      name: "CI 系统",
      type: "web",
      description: null,
      enabled: true,
      createdAt: "2026-07-18 12:00:00",
      updatedAt: "2026-07-18 12:00:00",
    };
    const fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify(created), { status: 201 }),
    );
    const { getByTestId, getAllByTestId } = render(<AppsClient initialApps={initialApps} />);
    fireEvent.click(getByTestId("new-app-btn"));
    await waitFor(() => expect(getByTestId("new-app-dialog")).toBeTruthy());
    fireEvent.change(getByTestId("new-app-code"), { target: { value: "ci" } });
    fireEvent.change(getByTestId("new-app-name"), { target: { value: "CI 系统" } });
    fireEvent.click(getByTestId("new-app-submit"));
    await waitFor(() => expect(fetchSpy).toHaveBeenCalled());
    const [url, init] = fetchSpy.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("/api/apps");
    expect(init.method).toBe("POST");
    expect(JSON.parse(init.body as string)).toMatchObject({ code: "ci", name: "CI 系统" });
    await waitFor(() => expect(getAllByTestId("app-row").length).toBe(3));
  });

  fnTest(["M04.F01.I04"], "I04 提交 EditAppDialog 调 PUT /api/apps/[id]", async () => {
    const updated = {
      id: 1,
      code: "dashboard",
      name: "数据看板 v2",
      type: "web",
      description: null,
      enabled: true,
      createdAt: "2026-01-01 00:00:00",
      updatedAt: "2026-07-18 12:00:00",
    };
    const fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify(updated), { status: 200 }),
    );
    const { getAllByTestId, getByTestId } = render(<AppsClient initialApps={initialApps} />);
    fireEvent.click(getAllByTestId("edit-app-btn")[0]!);
    await waitFor(() => expect(getByTestId("edit-app-dialog")).toBeTruthy());
    fireEvent.change(getByTestId("edit-app-name"), { target: { value: "数据看板 v2" } });
    fireEvent.click(getByTestId("edit-app-submit"));
    await waitFor(() => expect(fetchSpy).toHaveBeenCalled());
    const [url, init] = fetchSpy.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("/api/apps/1");
    expect(init.method).toBe("PUT");
  });

  fnTest(["M04.F01.I05"], "I05 删除按钮点击触发 fetch DELETE（点 confirm 后）", async () => {
    const fetchSpy = vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ deleted: true }), { status: 200 }),
    );
    const { getAllByTestId, getByTestId } = render(<AppsClient initialApps={initialApps} />);
    const deleteBtns = getAllByTestId("delete-app-btn");
    expect(deleteBtns[0]!.getAttribute("data-fn")).toBe("M04.F01.I05");
    fireEvent.click(deleteBtns[0]!);
    await waitFor(() => expect(getByTestId("confirm-dialog")).toBeTruthy());
    const dialog = getByTestId("confirm-dialog");
    const buttons = Array.from(dialog.querySelectorAll("button"));
    fireEvent.click(buttons[buttons.length - 1] as HTMLElement);
    await waitFor(() => expect(fetchSpy).toHaveBeenCalled());
    const [url, init] = fetchSpy.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("/api/apps/1");
    expect(init.method).toBe("DELETE");
  });
});