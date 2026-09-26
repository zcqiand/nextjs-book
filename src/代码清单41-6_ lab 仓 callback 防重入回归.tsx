  it("StrictMode 双调 effect 时 callback 只 POST 一次（saas code 一次性）", async () => {
    // 回归：callback 分支此前没有防重入守卫，StrictMode dev 双调 effect →
    // 同一 code POST 两次 → saas 单次有效，第二发恒 400
    // INVALID_GRANT「code 不存在或已被使用」。
    callbackMock.mockResolvedValue({ token: "t-1" });
    sessionStorage.setItem("lab.sso.state", "st-1");
    window.history.replaceState(null, "", "/login?code=cd-1&state=st-1");

    render(
      <StrictMode>
        <LoginPage />
      </StrictMode>,
    );

    await waitFor(() => expect(callbackMock).toHaveBeenCalledTimes(1));
    // 给 StrictMode 第二次 effect / 微任务链留出时间窗
    await new Promise((r) => setTimeout(r, 50));
    expect(callbackMock).toHaveBeenCalledTimes(1);
  });