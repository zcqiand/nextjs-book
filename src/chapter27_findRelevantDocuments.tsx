// 从第 27 章提取
// 代码清单: src/lib/vector-store.ts
// 文件名: chapter27_findRelevantDocuments.tsx
// src/lib/vector-store.ts
import { createClient } from '@supabase/supabase-js';
import { OpenAIEmbeddings } from '@langchain/openai';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const embeddings = new OpenAIEmbeddings({
  openAIApiKey: process.env.OPENAI_API_KEY,
});

export async function findRelevantDocuments(
  query: string,
  tableName: string,
  matchCount: number = 5
) {
  // 将查询转换为向量
  const queryEmbedding = await embeddings.embedQuery(query);

  // 在 Supabase 中进行向量相似度搜索
  const { data: results, error } = await supabase.rpc('match_documents', {
    table_name: tableName,
    query_embedding: queryEmbedding,
    match_count: matchCount,
  });

  if (error) {
    throw new Error(`Vector search failed: ${error.message}`);
  }

  return results;
}
