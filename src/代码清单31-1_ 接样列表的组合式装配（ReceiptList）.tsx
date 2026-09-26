export function ReceiptList() {
  const { list: contracts, fetchContracts } = useContractStore();
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState<"create" | "edit">("create");
  const [editing, setEditing] = useState<SampleReceipt | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<SampleReceipt | null>(null);
  // …（submitting / deleting / refreshRef 状态与合同列表预拉 useEffect，略）
  // …（handleSubmit / handleDelete：调 orval 生成的写接口后 refresh，略）

  const toolbarAction = useCallback((refresh: () => Promise<void>) => {
    refreshRef.current = refresh;
    return (
      <button
        onClick={() => {
          setFormMode("create");
          setEditing(null);
          setFormOpen(true);
        }}
        data-fn="M03.F01.I02"
        // …（按钮样式 className，略）
      >
        新建接样
      </button>
    );
  }, []);

  const rowActions = useCallback((r: SampleReceipt) => {
    if (r.flowStatus === "receiving") {
      return (
        <ReceiptRowActions
          receipt={r}
          onEdit={(r) => {
            setFormMode("edit");
            setEditing(r);
            setFormOpen(true);
          }}
          onDelete={setDeleteTarget}
        />
      );
    }
    return <span className="text-gray-400 text-xs">已提交</span>;
  }, []);

  return (
    // @entry M03.F01.I01
    // @entry M03.F01.I06
    <>
      <FlowStagePage
        title="接样管理"
        stage="receiving"
        submitLabel="提交"
        dataFn="M03.F01.I01"
        filterDataFn="M03.F01.I06"
        toolbar={toolbarAction}
        rowActions={rowActions}
      />

      <ReceiptFormModal
        open={formOpen}
        mode={formMode}
        initialValues={editing ?? undefined}
        contracts={contracts}
        onSubmit={handleSubmit}
        // …（onCancel / loading 两个 props，略）
      />

      <ConfirmModal
        open={deleteTarget !== null}
        title="删除确认"
        // …（message / confirmText / loading / onConfirm / onCancel，略）
      />
    </>
  );
}