// 每次请求都重新渲染
export const dynamic = 'force-dynamic';

export default async function ProfilePage() {
  const user = await fetchCurrentUser();
  return <Profile user={user} />;
}