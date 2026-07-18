export async function createPost(data: CreatePostInput) {
  try {
    // 业务逻辑
    const post = await db.post.create({ data });

    revalidateTag('posts');
    return { success: true, post };
  } catch (error) {
    console.error('createPost error:', error);

    // 分类错误
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return { success: false, error: '文章标题已存在' };
      }
      if (error.code === 'P2003') {
        return { success: false, error: '无效的分类 ID' };
      }
    }

    return { success: false, error: '创建文章失败，请稍后重试' };
  }
}