// 从第 27 章提取
// 代码清单: API 路由 POST 处理器
// 文件名: chapter27_POST_5.tsx
// src/app/api/review-code/route.ts
import { openai } from '@/lib/ai';

export async function POST(request: Request) {
  const { code, language } = await request.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: `你是一个专业的代码审查助手。分析提供的代码，检查：
1. 潜在 bug 和安全问题
2. 代码风格问题
3. 性能优化建议
4. 最佳实践建议

请以结构化格式输出审查结果。`,
      },
      {
        role: 'user',
        content: `请审查以下 ${language || '通用'} 代码：\n\n\`\`\`\n${code}\n\`\`\``,
      },
    ],
    temperature: 0.3,
  });

  return NextResponse.json({
    review: response.choices[0].message.content,
  });
}
