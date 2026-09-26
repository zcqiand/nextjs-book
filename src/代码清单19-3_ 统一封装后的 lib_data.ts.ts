// lib/data.ts（本章统一封装后）
// 演进重点：缓存策略收敛到数据层唯一入口，调用方只声明需求，缓存时长由这一处统一决定

export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
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

// 服务端 fetch 必须用绝对地址：Node 环境里相对路径没有「当前页面」的概念，会直接抛错
const APP_BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';

export interface FetchTasksOptions {
  status?: TaskStatus;
  // 透传给 fetch 的 Data Cache 配置（回看第16章：15.x 的 fetch 默认 no-store，
  // 显式声明 next: { revalidate: N } 才会进入 Data Cache）
  next?: { revalidate: number };
}

// 供路由处理器直接读内存数据源：处理器若调用 fetchTasks 会形成「自己请求自己」的 HTTP 回环
export function queryTasks(status?: TaskStatus): Task[] {
  if (!status) {
    return [...taskStore];
  }
  return taskStore.filter((task) => task.status === status);
}

export async function fetchTasks(options: FetchTasksOptions = {}): Promise<Task[]> {
  const { status, next } = options;

  const params = new URLSearchParams();
  if (status) {
    params.set('status', status);
  }
  const queryString = params.toString();

  // revalidate 的默认值写在这里而非各页面：调用方漏配时仍有保守缓存，避免每次请求都回源
  const response = await fetch(
    `${APP_BASE_URL}/api/tasks${queryString ? `?${queryString}` : ''}`,
    { next: next ?? { revalidate: 60 } },
  );

  if (!response.ok) {
    // 网络层失败属于无法继续渲染的异常，抛错交给上层错误边界；
    // 这与 getTaskById 的「未命中返回 undefined」不同：找不到数据是正常业务态
    throw new Error(`任务数据获取失败：${response.status}`);
  }
  return response.json() as Promise<Task[]>;
}

export async function fetchMember(id: string): Promise<Member | undefined> {
  // 本章只演进 fetchTasks 的缓存链路，成员读取保持直读内存源；
  // 第22章补齐成员端点后，改这里一处即可让所有调用方切到 HTTP 数据源
  return memberStore.find((member) => member.id === id);
}

export function fetchComments(taskId: string): Comment[] {
  return commentStore.filter((comment) => comment.taskId === taskId);
}

export function getTaskById(id: string): Task | undefined {
  // 运行时校验入参契约：id 来自外部输入时可能是空串或被污染的值，
  // 提前返回 undefined 比放行去查全表更安全
  if (typeof id !== 'string' || id.length === 0) {
    return undefined;
  }
  return taskStore.find((task) => task.id === id);
}