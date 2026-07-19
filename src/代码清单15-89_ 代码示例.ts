after(async () => {
  await sendWelcomeEmail(user.email);
  await sendAdminNotification(`新用户注册: ${user.name}`);
});