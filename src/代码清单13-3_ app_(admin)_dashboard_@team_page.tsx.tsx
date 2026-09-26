// lib/data.ts 演示用内存实现（本章三个数据函数的完整定义，真实项目中换实现、不改签名）：
//
//   export type Task = {
//     id: string;
//     title: string;
//     status: 'todo' | 'in-progress' | 'done';
//     assigneeId: string;
//     updatedAt: string; // ISO 8601 字符串
//   };
//   export type Member = { id: string; name: string; role: string };
//
//   const members: Member[] = [
//     { id: 'm-001', name: '林一舟', role: '前端工程师' },
//     { id: 'm-002', name: '陈晚风', role: '后端工程师' },
//     { id: 'm-003', name: '赵知远', role: '产品经理' },
//   ];
//   const tasks: Task[] = [
//     { id: '101', title: '搭建看板骨架', status: 'done', assigneeId: 'm-001', updatedAt: '2026-09-20T10:00:00.000Z' },
//     { id: '102', title: '实现任务卡片拖拽', status: 'in-progress', assigneeId: 'm-002', updatedAt: '2026-09-24T08:30:00.000Z' },
//     { id: '103', title: '编写任务筛选器', status: 'todo', assigneeId: 'm-003', updatedAt: '2026-09-25T14:00:00.000Z' },
//   ];
//
//   export async function fetchMember(): Promise<Member[]> {
//     return members;
//   }
//   export async function fetchTasks(): Promise<Task[]> {
//     return tasks;
//   }
//   export async function getTaskById(id: string): Promise<Task | undefined> {
//     return tasks.find((task) => task.id === id);
//   }

import { fetchMember } from '@/lib/data';

// Server Component + async：成员面板的数据在服务端取好再渲染，浏览器不参与
export default async function TeamPanel() {
  const members = await fetchMember();
  return (
    <section>
      <h2 style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 600 }}>团队成员</h2>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 8 }}>
        {members.map((member) => (
          <li
            key={member.id}
            style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}
          >
            <span>{member.name}</span>
            <span style={{ color: '#6b7280' }}>{member.role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}