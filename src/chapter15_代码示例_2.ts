// 从第 15 章提取
// 代码清单: 代码示例
// 文件名: chapter15_代码示例_2.ts
after(async () => {
  await analytics.track('purchase_completed', {
    value: order.total,
    currency: order.currency,
  });
});
