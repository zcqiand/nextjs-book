// lib/data.ts（本章简化基线快照：教学示意数据层）
// 用内存数组充当数据源，是为了在第13章不引入数据库概念；
// 将来替换为真实数据库时只改这一处，函数家族的签名保持不变，调用方无感知

export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  assigneeId: string;
}

export interface Member {
  id: string;
  name: string;
}

export interface Comment {
  id: string;
  taskId: string;
  authorId: string;
  content: string;
}

const taskStore: Task[] = [
  { id: 't-001', title: '梳理看板需求', status: 'done', assigneeId: 'm-001' },
  { id: 't-002', title: '搭建列表页布局', status: 'in-progress', assigneeId: 'm-002' },
  { id: 't-003', title: '编写筛选器组件', status: 'todo', assigneeId: 'm-001' },
  { id: 't-004', title: '接入成员数据', status: 'todo', assigneeId: 'm-003' },
];

const memberStore: Member[] = [
  { id: 'm-001', name: '林晓' },
  { id: 'm-002', name: '陈默' },
  { id: 'm-003', name: '周舟' },
];

const commentStore: Comment[] = [
  { id: 'c-001', taskId: 't-001', authorId: 'm-002', content: '需求文档已经同步到看板。' },
  { id: 'c-002', taskId: 't-002', authorId: 'm-001', content: '布局稿我 review 过了，可以继续。' },
];

export function fetchTasks(): Task[] {
  // 返回副本而非原数组引用：避免调用方直接改动污染内存数据源
  return [...taskStore];
}

export function fetchMember(id: string): Member | undefined {
  return memberStore.find((member) => member.id === id);
}

export function fetchComments(taskId: string): Comment[] {
  return commentStore.filter((comment) => comment.taskId === taskId);
}

export function getTaskById(id: string): Task | undefined {
  return taskStore.find((task) => task.id === id);
}