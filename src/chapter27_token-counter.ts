// 从第 27 章提取
// 代码清单: src/lib/token-counter.ts
// 文件名: chapter27_token-counter.ts
// src/lib/token-counter.ts
import { encoding_for_model } from '@anthropic-ai/tokenizer';

export function countTokens(text: string, model: string = 'gpt-4o'): number {
  // 估算 token 数量（中文大约 2 字符 = 1 token）
  // 精确计算需要使用专门的 tokenizer
  if (model.startsWith('gpt')) {
    return Math.ceil(text.length / 2);
  }
  return Math.ceil(text.length / 3);
}

export function estimateCost(
  inputTokens: number,
  outputTokens: number,
  model: string = 'gpt-4o'
): number {
  const prices: Record<string, { input: number; output: number }> = {
    'gpt-4o': { input: 5, output: 15 }, // $ per million tokens
    'gpt-4o-mini': { input: 0.15, output: 0.6 },
    'gpt-3.5-turbo': { input: 0.5, output: 1.5 },
  };

  const price = prices[model] || prices['gpt-4o'];
  return (
    (inputTokens * price.input + outputTokens * price.output) / 1_000_000
  );
}
