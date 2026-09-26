// 函数级：'use cache' 写在 async 函数体第一行，只缓存这一个函数
// （文件级则写在文件第一行）
export async function getCategoryCounts(categoryId: string) {
  'use cache';
  // 两条硬约束：必须是 async 函数；返回值必须可序列化（数字/字符串/布尔/普通对象/数组），
  // 与第 15 章服务端到客户端的序列化边界是同一条规矩
  const response = await fetch(`https://api.example.com/categories/${categoryId}/counts`);
  if (!response.ok) {
    throw new Error(`分类计数请求失败：HTTP ${response.status}`);
  }
  return response.json();
}