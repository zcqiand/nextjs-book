// src/lib/ai-cache.ts
import { createHash } from 'crypto';

interface CacheEntry {
  result: string;
  timestamp: number;
}

const cache = new Map<string, CacheEntry>();
const CACHE_TTL = 1000 * 60 * 60; // 1 小时

export async function cachedAIRequest<T>(
  cacheKey: string,
  requestFn: () => Promise<T>,
  ttl: number = CACHE_TTL
): Promise<T> {
  const hash = createHash('sha256').update(cacheKey).digest('hex');
  const cached = cache.get(hash);

  if (cached && Date.now() - cached.timestamp < ttl) {
    return cached.result as T;
  }

  const result = await requestFn();
  cache.set(hash, { result: result as string, timestamp: Date.now() });

  return result;
}