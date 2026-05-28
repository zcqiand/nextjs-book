// 从第 28 章提取
// 代码清单: src/hooks/use-posts.ts
// 文件名: chapter28_use-posts.ts
// src/hooks/use-posts.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { db } from '@/lib/db';

export function usePosts(category?: string) {
  return useQuery({
    queryKey: ['posts', { category }],
    queryFn: () => db.post.findMany({
      where: category ? { category } : undefined,
      orderBy: { createdAt: 'desc' },
    }),
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreatePostInput) => createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
}
