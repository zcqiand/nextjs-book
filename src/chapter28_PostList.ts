// 从第 28 章提取
// 代码清单: 使用
// 文件名: chapter28_PostList.ts
// 使用
function PostList() {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) return <div>加载中...</div>;
  if (error) return <div>加载失败</div>;

  return (
    <div>
      {posts?.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
