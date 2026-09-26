  fnTest(
    ["M01.F04.I02"],
    "完整正向流程：draft → submitted → testing → review → approved",
    async () => {
      const user = userEvent.setup();
      render(<FlowPanel operatorId="u-001" operatorRole="admin" />);
      // 状态标签用 exact 匹配，避免与历史记录"草稿 → 已提交"中的文本冲突
      expect(screen.getByText("草稿", { exact: true })).toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: "提交检测" }));
      expect(screen.getByText("已提交", { exact: true })).toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: "开始检测" }));
      expect(screen.getByText("检测中", { exact: true })).toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: "提交复审" }));
      expect(screen.getByText("复审中", { exact: true })).toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: "通过复审" }));
      // 终态文案在 span 中（状态标签 + 终态提示 span）
      expect(screen.getAllByText(/已通过/).length).toBeGreaterThan(0);
      // 终态无操作按钮（除重置）
      expect(screen.queryByRole("button", { name: "通过复审" })).not.toBeInTheDocument();
      expect(screen.queryByRole("button", { name: "拒绝" })).not.toBeInTheDocument();

      // 历史记录 4 条
      const historyItems = screen.getAllByText(/→/);
      expect(historyItems).toHaveLength(4);
    },
  );