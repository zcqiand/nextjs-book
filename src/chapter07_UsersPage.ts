// 从第 7 章提取
// 代码清单: app/users/page.tsx
// 文件名: chapter07_UsersPage.ts
// app/users/page.tsx
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function UsersPage() {
  // 直接在组件中查询数据库
  const users = await prisma.user.findMany({
    where: { active: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main>
      <h1>用户列表</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </main>
  );
}
