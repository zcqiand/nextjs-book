// app/user/[id]/page.tsx
import UserProfile from './UserProfile';

export default async function UserPage({ params }) {
  const userPromise = fetch(`/api/users/${params.id}`).then(res => res.json());

  return <UserProfile userPromise={userPromise} />;
}