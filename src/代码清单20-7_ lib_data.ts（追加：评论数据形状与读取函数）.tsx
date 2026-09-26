// 追加到 lib/data.ts 末尾；既有 Task/Member 类型与 tasks/members 数组保持原样不动。
// 字段口径：taskId 指向所属任务；createdAt 为 ISO 8601 字符串，与 Task.updatedAt 同口径
export type Comment = {
  id: string;
  taskId: string;
  author: string;
  content: string;
  createdAt: string; // ISO 8601
};

// 内存评论表初始为空。导出数组是为了让 app/actions/comments.ts 写入同一条内存数据：
// 教学用内存实现，真实项目里读写都换成数据库，函数签名保持不变
export const comments: Comment[] = [];

export async function fetchComments(taskId: string): Promise<Comment[]> {
  // 按 taskId 过滤；ISO 8601 字符串的字典序即时间序，倒序后最新评论排最前
  return comments
    .filter((comment) => comment.taskId === taskId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}