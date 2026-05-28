// 从第 7 章提取
// 代码清单: Client Component 标记
// 文件名: chapter07_UserProfile_2.tsx
'use client';

import { use } from 'react';

export default function UserProfile({ userPromise }) {
  // use() hook 直接接收 Promise，返回解析后的数据
  const user = use(userPromise);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
