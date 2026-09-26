export type StageFilter = "all" | "not_yet" | "submitted";

// …（FlowStagePage 组件状态声明区）
  // 三态过滤器：全部/未提交/已提交；接样页（无 stage）默认全部，其他页面默认未提交
  const [filter, setFilter] = useState<StageFilter>(() => {
    if (defaultFilter !== undefined) return defaultFilter;
    return stage ? "not_yet" : "all";
  });

// …（fetchStage 的查询参数组装）
        const params: ReceiptListQuery = {
          page: p,
          pageSize: PAGE_SIZE,
        };
        if (stage) params.flowStatus = stage;
        if (kw) params.keyword = kw;
        if (filter !== "all") params.filter = filter;

// …（工具栏 JSX）
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value as StageFilter);
            setPage(1);
          }}
          data-fn={filterDataFn}
          className="border rounded px-2 py-1.5 text-sm"
        >
          <option value="all">全部</option>
          <option value="not_yet">未提交</option>
          <option value="submitted">已提交</option>
        </select>
        <input
          placeholder="搜索委托书编号/报告编号/接样人"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="border rounded px-3 py-1.5 text-sm flex-1 min-w-[200px]"
        />