import { ratelimit } from '@/lib/ratelimit';
import { auth } from '@/lib/auth';

export async function createPost(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, error: '请先登录' };
  }

  const { success, remaining, reset } = await ratelimit.limit(session.user.id);

  if (!success) {
    return {
      success: false,
      error: `操作过于频繁，请在 ${Math.ceil((reset - Date.now()) / 1000)} 秒后重试`,
    };
  }

  // 业务逻辑
  const post = await db.post.create({
    data: {
      ...Object.fromEntries(formData),
      authorId: session.user.id,
    },
  });

  return { success: true, post };
}