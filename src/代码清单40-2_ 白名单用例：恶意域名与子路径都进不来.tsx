  it("M04.F03.I01 redirectUri 不在白名单 → 400 INVALID_REDIRECT_URI", async () => {
    mockClientAndUser();
    const res = await POST(
      makeReq(
        { ...loginPageBody, redirectUri: "https://evil.example.com/cb" },
        `Bearer ${await bearerToken()}`,
      ) as never,
    );
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.code).toBe("INVALID_REDIRECT_URI");
  });

  it("M04.F03.I01 白名单条目的子路径（无 '?' 边界）→ 400 INVALID_REDIRECT_URI（csv 语义，非子串匹配）", async () => {
    mockClientAndUser();
    // 'http://localhost:5201/call' 是 '/callback' 条目的前缀子串——旧 text.includes 误放行
    const res = await POST(
      makeReq(
        { ...loginPageBody, redirectUri: "http://localhost:5201/call" },
        `Bearer ${await bearerToken()}`,
      ) as never,
    );
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.code).toBe("INVALID_REDIRECT_URI");
  });