import { getCurrentUser } from "@/lib/auth-server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * 仪表盘 / 欢迎页（server component）。
 * 替换原脚手架的「项目管理」占位（home-client 假数据）。
 * 后续真实仪表盘卡片（待办、近期报告等）在此叠加。
 */
export default async function DashboardPage() {
  const user = await getCurrentUser();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">欢迎，{user?.displayName}</h1>
      <Card>
        <CardHeader>
          <CardTitle>实验室管理系统</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          从左侧菜单进入各功能模块。尚未实现的模块标「规划」，点击进入会提示建设中。
        </CardContent>
      </Card>
    </div>
  );
}