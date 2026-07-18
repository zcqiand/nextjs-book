import { Suspense } from 'react';

export default function UsersPage() {
  const usersPromise = fetch('/api/users').then(res => res.json());

  return (
    <Suspense fallback={<UserListSkeleton />}>
      <UserList usersPromise={usersPromise} />
    </Suspense>
  );
}