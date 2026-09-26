// src/app/(app)/layout.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AppLayoutWithState({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchTerm, setSearchTerm] = useState('');

  console.log(`[工作台布局] 渲染于 ${new Date().toLocaleTimeString()}`);

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <aside style={{ width: '250px', flexShrink: 0 }}>
        <div style={{ padding: '1rem', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>搜索看板</h3>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="输入关键词..."
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
          {searchTerm && (
            <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem' }}>
              搜索: {searchTerm}
            </p>
          )}
          {/* 看板导航和快捷入口... */}
        </div>
      </aside>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}