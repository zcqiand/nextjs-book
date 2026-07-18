// 正确：在调用前捕获所有需要的数据
const userId = data.userId;
const orderId = order.id;
after(async () => {
  await sendEmail(userId, orderId); // 可以访问调用前定义的变量
});