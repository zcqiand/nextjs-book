// src/app/api/summarize/route.ts
import { openai } from '@/lib/ai';
import { z } from 'zod';

const SummarizeSchema = z.object({
  content: z.string().min(100).max(50000),
  maxLength: z.number().min(50).max(500).optional().default(200),
});

export async function POST(request: Request) {
  const json = await request.json();
  const { content, maxLength } = SummarizeSchema.parse(json);

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: `你是一个专业的文章摘要助手。请将以下文章压缩成大约 ${maxLength} 字的中文摘要，保持核心信息和要点。`,
      },
      {
        role: 'user',
        content,
      },
    ],
    temperature: 0.3,
  });

  return NextResponse.json({
    summary: response.choices[0].message.content,
  });
}