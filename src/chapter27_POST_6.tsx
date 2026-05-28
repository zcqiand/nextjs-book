// 从第 27 章提取
// 代码清单: API 路由 POST 处理器
// 文件名: chapter27_POST_6.tsx
// src/app/api/rag-query/route.ts
import { openai } from '@/lib/ai';
import { findRelevantDocuments } from '@/lib/vector-store';
import { OpenAIStream, StreamingTextResponse } from 'ai';

export const runtime = 'edge';

export async function POST(request: Request) {
  const { question, useKnowledgeBase } = await request.json();

  let context = '';

  // 如果启用知识库检索
  if (useKnowledgeBase) {
    const relevantDocs = await findRelevantDocuments(question, 'knowledge_base', 5);
    context = relevantDocs
      .map((doc: { content: string }) => doc.content)
      .join('\n\n');
  }

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: context
          ? `你是一个知识库助手。请仅使用以下提供的上下文信息回答问题。如果上下文中没有相关信息，请说明无法回答。

上下文信息：
${context}`
          : '你是一个友好的助手，用简洁的语言回答问题。',
      },
      {
        role: 'user',
        content: question,
      },
    ],
    stream: true,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
