"use client";
import { type ReactNode } from "react";
import { usePermissions } from "./use-permission";

interface Props {
  permission: string;
  children: ReactNode;
  fallback?: ReactNode;
  dataFn?: string;
}

export function HasPermission({ permission, children, fallback = null, dataFn }: Props) {
  const { can: canDo } = usePermissions();
  return <span data-fn={dataFn}>{canDo(permission) ? children : fallback}</span>;
}