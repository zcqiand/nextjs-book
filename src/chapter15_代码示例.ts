// 从第 15 章提取
// 代码清单: 代码示例
// 文件名: chapter15_代码示例.ts
after(async () => {
  await sendWelcomeEmail(user.email);
  await sendAdminNotification(`新用户注册: ${user.name}`);
});
