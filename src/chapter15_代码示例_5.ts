// 从第 15 章提取
// 代码清单: 代码示例
// 文件名: chapter15_代码示例_5.ts
after(async () => {
  try {
    await sendOrderEmail();
  } catch (error) {
    // 记录错误但不阻止其他 after 任务执行
    console.error('Failed to send order email:', error);
  }
});
