after(async () => {
  try {
    await sendOrderEmail();
  } catch (error) {
    // 记录错误但不阻止其他 after 任务执行
    console.error('Failed to send order email:', error);
  }
});