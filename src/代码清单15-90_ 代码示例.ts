after(async () => {
  await analytics.track('purchase_completed', {
    value: order.total,
    currency: order.currency,
  });
});