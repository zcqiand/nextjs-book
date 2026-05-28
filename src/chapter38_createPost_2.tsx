// 从第 38 章提取
// 代码清单: headers 操作
// 文件名: chapter38_createPost_2.tsx
// Next.js Server Actions 内置 CSRF 防护
// 但你仍需验证请求来源

export async function createPost(formData: FormData) {
  // 验证请求来源
  const referer = headers().get('referer');
  const origin = headers().get('origin');

  if (!referer || !referer.startsWith(origin)) {
    return { success: false, error: '无效的请求来源' };
  }

  // 验证会话
  const session = await auth();
  if (!session) {
    return { success: false, error: '请先登录' };
  }

  // 业务逻辑
  const post = await db.post.create({
    data: {
      ...formData,
      authorId: session.user.id,
    },
  });

  return { success: true, post };
}
