// 从第 7 章提取
// 代码清单: Client Component 标记
// 文件名: chapter07_UserList.tsx
'use client';

import { use } from 'react';

function UserList({ usersPromise }) {
  // use() hook 直接接收 Promise，返回解析后的数据
  const users = use(usersPromise);

  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

function UserListSkeleton() {
  return <div className="skeleton">加载用户列表...</div>;
}
