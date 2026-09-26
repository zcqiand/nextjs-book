// pages/api/tasks.ts
export default async function handler(req, res) {
  // 需要手动判断 HTTP 方法
  if (req.method === 'GET') {
    const tasks = await getTasks();
    res.status(200).json(tasks);
  } else if (req.method === 'POST') {
    const task = await createTask(req.body);
    res.status(201).json(task);
  } else if (req.method === 'DELETE') {
    // DELETE 处理...
  }
}