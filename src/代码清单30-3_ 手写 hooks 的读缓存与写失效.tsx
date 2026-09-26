function toQuery(filters: ContractFilters): string {
  const sp = new URLSearchParams();
  if (filters.status) sp.set("status", filters.status);
  if (filters.keyword) sp.set("keyword", filters.keyword);
  if (filters.page) sp.set("page", String(filters.page));
  if (filters.pageSize) sp.set("pageSize", String(filters.pageSize));
  const q = sp.toString();
  return q ? `?${q}` : "";
}

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const token = getToken();
  const res = await fetch(url, {
    cache: "no-store",
    ...init,
    // BFF 全域 token 化（2026-09-23 P4）：无 token 时不带 Authorization 头，
    // BFF 401 信封走 !res.ok 抛错路径（ADR-0019：身份缺失不兜底）。
    // 合并在 init 之后：不覆盖调用方传入的 Content-Type 等
    headers: {
      ...(init?.headers as Record<string, string> | undefined),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!res.ok) {
    let body: unknown;
    try {
      body = await res.json();
    } catch {
      body = null;
    }
    throw new Error(`HTTP ${res.status}: ${JSON.stringify(body)}`);
  }
  if (res.status === 204) return undefined as T;
  return (await res.json()) as T;
}

export function useContracts(
  filters: ContractFilters = {},
  options?: Omit<UseQueryOptions<ContractsListResponse, Error>, "queryKey" | "queryFn">,
) {
  return useQuery<ContractsListResponse, Error>({
    queryKey: ["contracts", filters],
    queryFn: () => fetchJson<ContractsListResponse>(`/api/contracts${toQuery(filters)}`),
    staleTime: 30_000,
    ...options,
  });
}

// …（useContract / useCreateContract / useUpdateContract 略，形态同下）

export function useDeleteContract() {
  const qc = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: (id) => fetchJson<void>(`/api/contracts/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["contracts"] });
    },
  });
}