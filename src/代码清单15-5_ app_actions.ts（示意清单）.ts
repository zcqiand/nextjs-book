"use server";

// 文件级 'use server'：本文件导出的所有 async 函数都会成为 Server Action，
// 客户端组件可以直接导入调用，函数体却在服务端执行。
// 硬规则：被标记的必须是 async 函数，写成同步函数构建时会直接报错。
export async function markTaskDone(taskId: string) {
  // 演示用只打印日志；真实项目会在这里写数据库，例如把该任务的 done 置为 true
  console.log(`markTaskDone 收到 taskId = ${taskId}`);
}

// 函数级写法只需要记住形态：'use server' 必须写在 async 函数体的第一行，例如：
//
// export async function archiveTask(taskId: string) {
//   "use server";
//   console.log(`archiveTask 收到 taskId = ${taskId}`);
// }
//
// 本章只确立这两种写法；Server Action 的完整实战（表单提交、
// 用 revalidatePath 刷新缓存）统一放到第 20 章展开。