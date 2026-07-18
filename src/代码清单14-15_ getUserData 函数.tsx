// 错误示例：返回了不应该暴露的信息
export async function getUserData() {
  const user = await db.user.findUnique({ where: { id: session.user.id } });

  return {
    // 这些信息不应该暴露给客户端！
    password: user.password,  // NEVER DO THIS
    internalNotes: user.internalNotes,
  };
}

// 正确示例：只返回必要的公开信息
export async function getUserData() {
  const user = await db.user.findUnique({ where: { id: session.user.id } });

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    // 不包含密码、内部笔记等敏感信息
  };
}