// src/app/members/page.tsx
import Image from 'next/image';

const members = [
  {
    id: 'u001',
    name: '林小满',
    avatarUrl: 'https://images.example.com/avatars/u001.png',
  },
  {
    id: 'u002',
    name: '陈航',
    avatarUrl: 'https://images.example.com/avatars/u002.png',
  },
];

export default function MembersPage() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-2xl font-bold">团队成员</h1>
      <ul className="space-y-4">
        {members.map((member) => (
          <li key={member.id} className="flex items-center gap-3">
            <Image
              src={member.avatarUrl}
              alt={`${member.name} 的头像`}
              width={48}
              height={48}
              className="rounded-full"
            />
            <span>{member.name}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}