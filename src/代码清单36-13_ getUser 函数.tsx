import { cache } from 'react';

// 普通函数：每次调用都执行
export async function getUser(id: string) {
  return db.user.findUnique({ where: { id } });
}

// 缓存函数：相同参数只执行一次
export const getCachedUser = cache(async (id: string) => {
  return db.user.findUnique({ where: { id } });
});

// 使用
export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // 多次调用只执行一次数据库查询
  const [user, posts, comments] = await Promise.all([
    getCachedUser(id),      // 第一次调用
    getCachedUser(id),      // 使用缓存
    getCachedUser(id),      // 使用缓存
  ]);

  // ...
}