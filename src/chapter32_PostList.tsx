// 从第 32 章提取
// 代码清单: PostList 函数
// 文件名: chapter32_PostList.tsx
function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // 调试：使用 debugger
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();

        // 调试：检查数据
        console.log('Fetched data:', data);

        if (Array.isArray(data)) {
          setPosts(data);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // 调试：状态变化
  useEffect(() => {
    console.log('Posts updated:', posts.length);
  }, [posts]);

  if (loading) return <div>加载中...</div>;

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
