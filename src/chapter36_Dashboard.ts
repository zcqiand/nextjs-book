// 从第 36 章提取
// 代码清单: 并行获取 - 推荐
// 文件名: chapter36_Dashboard.ts
// 并行获取 - 推荐
export default async function Dashboard() {
  const [user, stats, notifications] = await Promise.all([
    getUser(),
    getStats(),
    getNotifications(),
  ]);

  return <Dashboard {...{ user, stats, notifications }} />;
}

// 串行获取 - 只在有依赖时使用
export default async function BlogPost() {
  // 必须先获取 post 才能获取 relatedPosts
  const post = await getPost();
  const relatedPosts = await getRelatedPosts(post.categoryId);

  return <Article {...{ post, relatedPosts }} />;
}
