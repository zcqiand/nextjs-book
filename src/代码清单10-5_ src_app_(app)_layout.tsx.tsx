'use client';

import { useState } from 'react';

// src/app/(app)/layout.tsx
export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="搜索看板或任务..."
      />
      {children}
    </div>
  );
}