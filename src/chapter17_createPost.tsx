// 从第 17 章提取
// 代码清单: headers 操作
// 文件名: chapter17_createPost.tsx
export async function createPost(formData: FormData) {
  const session = await auth();

  if (!session) {
    return { error: '请先登录' };
  }

  // 验证请求来源
  const referer = headers().get('referer');
  const origin = headers().get('origin');

  if (!referer || !referer.startsWith(origin)) {
    return { error: '无效的请求' };
  }

  // 创建文章...
}
