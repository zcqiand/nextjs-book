// 不要缓存用户特定数据
export async function getUserData(userId: string) {
  return fetch(`/api/users/${userId}`, {
    cache: 'no-store', // 始终获取最新数据
  });
}