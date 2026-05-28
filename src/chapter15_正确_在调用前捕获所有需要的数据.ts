// 从第 15 章提取
// 代码清单: 正确：在调用前捕获所有需要的数据
// 文件名: chapter15_正确_在调用前捕获所有需要的数据.ts
// 正确：在调用前捕获所有需要的数据
const userId = data.userId;
const orderId = order.id;
after(async () => {
  await sendEmail(userId, orderId); // 可以访问调用前定义的变量
});
