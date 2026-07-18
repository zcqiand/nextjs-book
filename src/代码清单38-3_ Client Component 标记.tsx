'use client';

import { useOptimistic, startTransition } from 'react';
import { likePost, unlikePost } from '@/app/actions/post';

export function LikeButton({ post }: { post: Post }) {
  const [optimisticPost, setOptimisticPost] = useOptimistic(
    post,
    (state, action: 'like' | 'unlike') => ({
      ...state,
      likes: action === 'like' ? state.likes + 1 : state.likes - 1,
      isLiked: action === 'like',
    })
  );

  async function handleLike() {
    const action = post.isLiked ? 'unlike' : 'like';

    startTransition(() => {
      setOptimisticPost(action);
    });

    try {
      if (action === 'like') {
        await likePost(post.id);
      } else {
        await unlikePost(post.id);
      }
    } catch {
      // 失败时回滚（通过重新渲染获取真实状态）
    }
  }

  return (
    <button onClick={handleLike}>
      {optimisticPost.isLiked ? '♥' : '♡'} {optimisticPost.likes}
    </button>
  );
}