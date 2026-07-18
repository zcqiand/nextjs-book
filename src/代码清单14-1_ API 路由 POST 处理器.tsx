// 传统方式：API 路由
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // 处理数据
  await sendEmail(data);
  return Response.json({ success: true });
}

// 客户端代码
async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
  });
}