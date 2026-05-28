// 从第 15 章提取
// 代码清单: 代码示例
// 文件名: chapter15_代码示例_3.ts
after(async () => {
  await revalidateTag('user-stats');
  await revalidateTag('product-inventory');
});
