// 从第 27 章提取
// 代码清单: API 路由 POST 处理器
// 文件名: chapter27_POST.tsx
// src/app/api/chat/route.ts
import { openai } from '@/lib/ai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { messages } = await request.json();

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: '你是一个友好的助手，用简洁的语言回答问题。',
        },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return NextResponse.json({
      content: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json(
      { error: '抱歉，AI 服务暂时不可用' },
      { status: 500 }
    );
  }
}
