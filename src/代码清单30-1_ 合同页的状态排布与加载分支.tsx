type Mode = { kind: "idle" } | { kind: "create" } | { kind: "edit"; id: string };

const EMPTY_BODY: Omit<Contract, "id" | "tenantId" | "createdAt" | "updatedAt"> = {
  contractCode: "",
  clientUnit: "",
  projectName: "",
  constructionUnit: "",
  witnessUnit: "",
  witness: "",
  status: "active",
};

export default function ContractsPage() {
  const [status, setStatus] = useState("");
  const [keyword, setKeyword] = useState("");
  const [mode, setMode] = useState<Mode>({ kind: "idle" });

  const filters = {
    status: status || undefined,
    keyword: keyword || undefined,
  };
  const list = useContracts(filters);
  const create = useCreateContract();
  const update = useUpdateContract(mode.kind === "edit" ? mode.id : "");
  const remove = useDeleteContract();

  const items = list.data?.items ?? [];

  // B6 加载态：首载未到齐整页 PageLoading，不渲染空壳
  //（TanStack Query isLoading 自带聚合语义；refetch（isFetching）不回空页）
  if (list.isLoading) return <PageLoading />;

  const editingContract =
    mode.kind === "edit" ? (items.find((c) => c.id === mode.id) ?? null) : null;