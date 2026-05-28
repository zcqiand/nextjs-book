// 从第 7 章提取
// 代码清单: app/user/[id]/page.tsx
// 文件名: chapter07_UserPage.ts
// app/user/[id]/page.tsx
import UserProfile from './UserProfile';

export default async function UserPage({ params }) {
  const userPromise = fetch(`/api/users/${params.id}`).then(res => res.json());

  return <UserProfile userPromise={userPromise} />;
}
