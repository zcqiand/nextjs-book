"use client";
import { createContext, useContext, type ReactNode } from "react";
import { can } from "@/lib/permissions";

const PermissionCtx = createContext<string[]>([]);

export function PermissionProvider({
  permissions,
  children,
}: {
  permissions: string[];
  children: ReactNode;
}) {
  return <PermissionCtx.Provider value={permissions}>{children}</PermissionCtx.Provider>;
}

export function usePermissions() {
  const perms = useContext(PermissionCtx);
  return { can: (code: string) => can(perms, code) };
}