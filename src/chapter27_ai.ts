// 从第 27 章提取
// 代码清单: src/lib/ai.ts
// 文件名: chapter27_ai.ts
// src/lib/ai.ts
import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
