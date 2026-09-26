// 追加到 app/actions.ts。参数是普通字符串而非 FormData：
// 非表单场景的 Server Action 可以接收任意可序列化参数，由调用方直接传值
export async function archiveTask(taskId: string): Promise<void> {
  // 演示用内存动作：真实项目里这里更新任务状态并写库
  console.log('[task/archive]', taskId);
}