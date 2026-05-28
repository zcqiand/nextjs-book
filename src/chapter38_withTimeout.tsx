// 从第 38 章提取
// 代码清单: withTimeout 函数
// 文件名: chapter38_withTimeout.tsx
import { db } from '@/lib/db';

export async function withTimeout<T>(
  operation: () => Promise<T>,
  timeoutMs: number = 5000
): Promise<T> {
  const timeoutPromise = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('Operation timeout')), timeoutMs)
  );

  return Promise.race([operation(), timeoutPromise]) as Promise<T>;
}

export async function searchPosts(query: string) {
  return withTimeout(
    db.post.findMany({
      where: { title: { contains: query } },
    }),
    3000 // 3 秒超时
  );
}
