// 从第 36 章提取
// 代码清单: API 路由 POST 处理器
// 文件名: chapter36_POST_2.tsx
// src/app/api/webhooks/cms/route.ts
export async function POST(request: Request) {
  const body = await request.json();

  // 验证 webhook 签名
  if (!verifyWebhookSignature(body, request.headers)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  // 根据事件类型清除缓存
  if (body.event === 'post.published') {
    revalidateTag('posts');
    revalidatePath('/blog');
  } else if (body.event === 'post.deleted') {
    revalidateTag('posts');
    revalidatePath(`/blog/${body.post.slug}`);
  }

  return NextResponse.json({ received: true });
}
