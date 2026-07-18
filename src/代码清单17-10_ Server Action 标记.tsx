// src/components/user-nav.tsx
import { auth, signOut } from '@/lib/auth';
import Link from 'next/link';

export async function UserNav() {
  const session = await auth();

  if (!session) {
    return (
      <nav className="flex gap-4">
        <Link href="/login" className="text-blue-600">
          登录
        </Link>
        <Link href="/register" className="text-blue-600">
          注册
        </Link>
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-4">
      <span className="text-sm text-gray-600">
        {session.user.name}
      </span>
      <form action={async () => {
        'use server';
        await signOut();
      }}>
        <button type="submit" className="text-sm text-gray-600 hover:text-gray-900">
          退出
        </button>
      </form>
    </nav>
  );
}