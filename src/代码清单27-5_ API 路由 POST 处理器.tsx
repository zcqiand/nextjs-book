// src/app/api/chat/stream/route.ts
import { openai } from '@/lib/ai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

export const runtime = 'edge';

export async function POST(request: Request) {
  const { messages } = await request.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: '你是一个友好的助手，用简洁的语言回答问题。',
      },
      ...messages,
    ],
    stream: true,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}