// 从第 7 章提取
// 代码清单: Client Component 标记
// 文件名: chapter07_UserProfile_3.tsx
'use client';

import { useQuery } from '@tanstack/react-query';

export default function UserProfile({ userId }) {
  const { data: user, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetch(`/api/users/${userId}`).then(res => res.json()),
    staleTime: 5 * 60 * 1000, // 5分钟内数据被视为新鲜
  });

  if (isLoading) return <div>加载中...</div>;
  if (error) return <div>错误: {error.message}</div>;

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}
