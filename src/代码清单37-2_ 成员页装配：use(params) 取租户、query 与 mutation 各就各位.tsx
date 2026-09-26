export default function UserListPage({ params }: { params: Promise<{ tenantId: string }> }) {
  const { tenantId } = use(params);
  const qc = useQueryClient();
  // getTenant via orval-generated useAdminTenantsGetTenant hook（ADR-0012 运行时 import 清零）。
  // 异步取租户名，加载中/失败显示 fallback。
  const tenantQ = useAdminTenantsGetTenant(tenantId, {
    query: { enabled: !!tenantId },
  });
  const tenant = tenantQ.data?.data ?? null;
  const tenantLabel = tenant ? `租户 ${tenant.name}（${tenant.tenantKey}）` : "租户未知";

  const usersQ = useTenantMembersListTenantUsers(tenantId);
  const rolesQ = useTenantRolesListSysRoles(tenantId, { clientId: "" } as never);
  const createMut = useTenantMembersCreateTenantUser();
  const updateMut = useTenantMembersUpdateTenantUser();
  const deleteMut = useTenantMembersDeleteTenantUser();
  const roleAssignMut = useTenantMembersAssignTenantMemberRoles();

  // ………（省略：四个弹窗开关的 useState 定义，见仓库原文 118-121 行）………

  // ADR-0029 双形态兼容：嵌套 TenantMemberView（aspnetcore）与扁平 User（msw/nextjs）都归一化
  const users = (usersQ.data?.data?.items ?? []).map(normalizeMemberRow);
  // SysRole 契约：roleCode/roleName（不是 code/name）
  const roles = (rolesQ.data?.data?.items ?? []) as Array<{
    id: string;
    roleCode: string;
    roleName: string;
  }>;