// 从第 20 章提取
// 代码清单: 每次请求都重新渲染
// 文件名: chapter20_ProfilePage.ts
// 每次请求都重新渲染
export const dynamic = 'force-dynamic';

export default async function ProfilePage() {
  const user = await fetchCurrentUser();
  return <Profile user={user} />;
}
