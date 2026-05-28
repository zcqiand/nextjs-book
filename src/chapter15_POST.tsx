// 从第 15 章提取
// 代码清单: API 路由 POST 处理器
// 文件名: chapter15_POST.tsx
import { after } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // 主逻辑：保存订单数据，立即响应用户
  const order = await db.order.create({
    userId: data.userId,
    items: data.items,
    total: data.total,
  });

  // 后续操作：发送确认邮件、更新库存、记录分析数据
  // 这些操作不会阻塞响应，用户会立即收到成功消息
  after(async () => {
    await sendOrderConfirmationEmail(data.userId, order.id);
    await updateInventory(data.items);
    await trackAnalytics('purchase', {
      orderId: order.id,
      value: data.total,
    });
  });

  // 用户会立即收到响应，而不需要等待所有后续操作完成
  return Response.json({
    success: true,
    orderId: order.id,
  });
}
