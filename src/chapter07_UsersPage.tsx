// 从第 7 章提取
// 代码清单: UsersPage 函数
// 文件名: chapter07_UsersPage.tsx
import { Suspense } from 'react';

export default function UsersPage() {
  const usersPromise = fetch('/api/users').then(res => res.json());

  return (
    <Suspense fallback={<UserListSkeleton />}>
      <UserList usersPromise={usersPromise} />
    </Suspense>
  );
}
