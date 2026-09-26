"use client";

// M00.F01 — 平台级租户管理（CRUD）

// ………（中略：react、lucide-react、TanStack Query 等 import）…………

import {
  adminTenantsCreateTenant,
  adminTenantsDeleteTenant,
  adminTenantsListTenants,
  adminTenantsUpdateTenant,
} from "@/api/endpoints/admin-tenants/admin-tenants";
import type { CreateTenantRequest, Tenant, UpdateTenantRequest } from "@/api/endpoints.schemas";

// ………（中略：ui 组件、PageHeader、useSelection、toApiError 等 import）…………

const FIELDS: FieldDef[] = [
  { name: "tenantKey", label: "Code", required: true, placeholder: "acme" },
  { name: "name", label: "名称", required: true, placeholder: "ACME Corp" },
  {
    name: "status",
    label: "状态",
    type: "select",
    required: true,
    defaultValue: "active",
    options: [
      { value: "active", label: "启用" },
      { value: "suspended", label: "暂停" },
    ],
  },
];

export default function TenantListPage() {
  const { selectedTenant, setSelectedTenant } = useSelection();
  const qc = useQueryClient();

  const list = useQuery({
    queryKey: ["adminTenantsListTenants"],
    queryFn: async () => (await adminTenantsListTenants()).data.items,
  });

  const createMut = useMutation({
    mutationFn: (data: CreateTenantRequest) => adminTenantsCreateTenant(data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["adminTenantsListTenants"] });
      toast.success("租户已创建");
    },
    onError: (err) => toast.error(`创建失败：${toApiError(err).message}`),
  });

  // ………（中略：updateMut 与 deleteMut 两个 useMutation，结构同 createMut）…………

  const [createOpen, setCreateOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<Tenant | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Tenant | null>(null);

  const tenants = list.data ?? [];

  return (
    <div className="space-y-6">
      // ………（中略：PageHeader 的 title 与 description，「已选中」标注在此处）…………

      <Card>
        // ………（中略：卡片头部、加载态、空态与表格的 Code/名称/状态列）…………

        <TableBody>
          {tenants.map((t) => {
            const isSelected = t.id === selectedTenant.id;
            return (
              <TableRow
                key={t.id}
                data-testid="tenant-row"
                data-selected={isSelected ? "true" : "false"}
                onClick={() => setSelectedTenant({ id: t.id, name: t.name })}
                className={cn(
                  "cursor-pointer transition-colors",
                  isSelected && "bg-blue-50 hover:bg-blue-100",
                )}
              >
                // ………（中略：选中标记单元格与 Code、名称、状态三列）…………
                <TableCell className="text-right space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    data-fn="M00.F01.I04"
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditTarget(t);
                    }}
                  >
                    编辑
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    data-fn="M00.F01.I05"
                    className="text-red-600 hover:text-red-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteTarget(t);
                    }}
                  >
                    删除
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Card>

      // ………（中略：新建/编辑两个 CrudDialog 与删除 ConfirmDialog，
      // 新建按钮带 data-fn="M00.F01.I02"，onSubmit 分别接入三个 mutation）…………
    </div>
  );
}