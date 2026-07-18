// src/app/api/search-suggest/route.ts
import { openai } from '@/lib/ai';

export async function POST(request: Request) {
  const { query, context } = await request.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: `你是一个搜索建议助手。基于用户输入和当前上下文，生成 3-5 个搜索建议。每个建议不超过 20 个字。
当前上下文：${context || '无'}
要求：
1. 建议要具体、有意义
2. 符合用户的搜索意图
3. 可以包含长尾关键词`,
      },
      {
        role: 'user',
        content: query,
      },
    ],
    temperature: 0.5,
  });

  const suggestions = response.choices[0].message.content
    ?.split('\n')
    .filter((s) => s.trim())
    .slice(0, 5) || [];

  return NextResponse.json({ suggestions });
}