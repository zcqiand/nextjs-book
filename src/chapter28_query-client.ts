// 从第 28 章提取
// 代码清单: src/lib/query-client.ts
// 文件名: chapter28_query-client.ts
// src/lib/query-client.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 分钟
      gcTime: 5 * 60 * 1000, // 5 分钟（之前是 cacheTime）
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});
