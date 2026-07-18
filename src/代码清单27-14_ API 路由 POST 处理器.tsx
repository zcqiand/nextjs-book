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