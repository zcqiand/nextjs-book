describe("M01.F05.I01 dashboard page", () => {
  fnTest(["M01.F05.I01"], "I01 页面根挂 data-fn=\"M01.F05.I01\"", () => {
    const { getByTestId } = render(<Home counts={sampleCounts} />);
    expect(getByTestId("dashboard-page").getAttribute("data-fn")).toBe("M01.F05.I01");
  });

  fnTest(["M01.F05.I01"], "渲染 3 张卡（3 个 link）", () => {
    const { getAllByRole } = render(<Home counts={sampleCounts} />);
    const links = getAllByRole("link");
    expect(links.length).toBe(3);
  });

  fnTest(["M01.F05.I01"], "3 张卡分别有 '租户数' / '用户总数' / '今日登录数' 标题", () => {
    const { getByTestId } = render(<Home counts={sampleCounts} />);
    expect(getByTestId("dashboard-card-tenants").textContent).toMatch(/租户数/);
    expect(getByTestId("dashboard-card-users").textContent).toMatch(/用户总数/);
    expect(getByTestId("dashboard-card-logins").textContent).toMatch(/今日登录数/);
  });

  fnTest(["M01.F05.I01"], "3 张卡显示对应数字（3 / 5 / 2）", () => {
    const { getByTestId } = render(<Home counts={sampleCounts} />);
    expect(getByTestId("dashboard-card-tenants-value").textContent).toBe("3");
    expect(getByTestId("dashboard-card-users-value").textContent).toBe("5");
    expect(getByTestId("dashboard-card-logins-value").textContent).toBe("2");
  });
});