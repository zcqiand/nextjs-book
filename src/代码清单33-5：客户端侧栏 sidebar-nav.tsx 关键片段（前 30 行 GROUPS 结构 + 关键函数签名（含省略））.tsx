"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HasPermission } from "@/features/auth/has-permission";
import { usePermissions } from "@/features/auth/use-permission";
import { LogoutButton } from "./logout-button";

interface MenuItem { label: string; href: string; permission: string; built: boolean; dataFn?: string; }
interface MenuGroup { title: string; items: MenuItem[]; }

const GROUPS: MenuGroup[] = [
  { title: "资源管理", items: [
    { label: "合同管理", href: "/contracts", permission: "project:read", built: true, dataFn: "M02.F01.I01" },
    { label: "人员管理", href: "/personnel", permission: "project:read", built: true, dataFn: "M02.F02.I01" },
    { label: "设备管理", href: "/equipment", permission: "project:read", built: true, dataFn: "M02.F03.I01" },
    { label: "设施环境", href: "/facilities", permission: "project:read", built: true, dataFn: "M02.F04.I01" },
  ]},
  { title: "数据统计", items: [
    { label: "统计汇总", href: "/summary", permission: "report:read", built: true, dataFn: "M05.F01.I01" },
  ]},
  // …其余三组（试验过程管理 / 系统管理 / 基础数据）省略
];

function GroupSection({ group }: { group: MenuGroup }) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  const { can } = usePermissions();
  const visible = group.items.filter((it) => can(it.permission));
  /* 折叠按钮 + HasPermission + Link 高亮当前路由 */
}

export function SidebarNav({ displayName }: { displayName: string }) {
  const pathname = usePathname();
  const homeActive = pathname === "/";
  /* aside + 顶部 Link "/" + GROUPS.map(GroupSection) + 底部 displayName + LogoutButton */
}