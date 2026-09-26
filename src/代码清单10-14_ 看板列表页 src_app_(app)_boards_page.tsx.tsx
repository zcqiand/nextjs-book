'use client';

// src/app/(app)/boards/page.tsx
import Link from 'next/link';

const boardList = [
  {
    id: 'design-refresh',
    name: '官网改版',
    description: '官网视觉与信息架构全面改版，覆盖首页、落地页与帮助中心。',
    status: '进行中',
    updatedAt: '2026-05-18',
  },
  {
    id: 'mobile-app',
    name: '移动端适配',
    description: '核心页面适配移动端断点，优先处理看板与任务详情。',
    status: '进行中',
    updatedAt: '2026-05-12',
  },
  {
    id: 'content-launch',
    name: '内容上线',
    description: '帮助文档与落地页文案批量上线。',
    status: '规划中',
    updatedAt: '2026-05-06',
  },
];

export default function BoardsPage() {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>看板</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {boardList.map((board) => (
          <article
            key={board.id}
            style={{
              padding: '1.5rem',
              border: '1px solid #eee',
              borderRadius: '8px',
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.5rem'
            }}>
              <span style={{
                fontSize: '0.75rem',
                padding: '0.25rem 0.5rem',
                backgroundColor: '#e3f2fd',
                color: '#1976d2',
                borderRadius: '4px'
              }}>
                {board.status}
              </span>
              <span style={{ fontSize: '0.875rem', color: '#666' }}>{board.updatedAt}</span>
            </div>
            <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem' }}>
              <Link
                href={`/boards/${board.id}`}
                style={{ color: '#333', textDecoration: 'none' }}
              >
                {board.name}
              </Link>
            </h2>
            <p style={{ margin: 0, color: '#666', lineHeight: 1.6 }}>{board.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}