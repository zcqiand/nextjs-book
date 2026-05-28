// 从第 36 章提取
// 代码清单: 不要缓存用户特定数据
// 文件名: chapter36_getUserData.tsx
// 不要缓存用户特定数据
export async function getUserData(userId: string) {
  return fetch(`/api/users/${userId}`, {
    cache: 'no-store', // 始终获取最新数据
  });
}
