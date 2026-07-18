import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth-server";
import { PermissionProvider } from "@/features/auth/permission-context";
import { Toaster } from "@/components/ui/sonner";
import { SidebarNav } from "./sidebar-nav";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  return (
    <PermissionProvider permissions={user.permissions}>
      <div className="flex min-h-screen bg-background">
        <SidebarNav displayName={user.displayName} />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
      <Toaster />
    </PermissionProvider>
  );
}