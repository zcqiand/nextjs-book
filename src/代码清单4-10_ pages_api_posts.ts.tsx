// pages/api/posts.ts
export default function handler(req, res) {
  // 需要手动判断 HTTP 方法
  if (req.method === 'GET') {
    const posts = await getPosts();
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const post = await createPost(req.body);
    res.status(201).json(post);
  } else if (req.method === 'DELETE') {
    // DELETE 处理...
  }
}