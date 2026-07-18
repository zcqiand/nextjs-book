// actions/posts.ts
'use server';

export async function createPost(data: CreatePostInput) {
  const db = container.get<PrismaClient>('db');
  const mailer = container.get<Mailer>('mailer');

  const post = await db.post.create({ data });

  await mailer.send({
    to: 'author@example.com',
    subject: '新文章已发布',
    body: `你的文章 "${post.title}" 已成功发布。`,
  });

  return post;
}