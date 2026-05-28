// 从第 27 章提取
// 代码清单: API 路由 POST 处理器
// 文件名: chapter27_POST_7.tsx
// src/app/api/chat/route.ts
import { openai } from '@/lib/ai';
import { withRetry } from '@/lib/retry';

export async function POST(request: Request) {
  const { messages } = await request.json();

  try {
    const completion = await withRetry(() =>
      openai.chat.completions.create({
        model: 'gpt-4o',
        messages,
      })
    );

    return NextResponse.json({
      content: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error('AI API failed after retries:', error);
    return NextResponse.json(
      { error: 'AI 服务暂时不可用，请稍后重试' },
      { status: 503 }
    );
  }
}
