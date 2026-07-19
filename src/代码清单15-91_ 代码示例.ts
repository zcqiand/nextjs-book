after(async () => {
  await revalidateTag('user-stats');
  await revalidateTag('product-inventory');
});