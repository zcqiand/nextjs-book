// 从第 22 章提取
// 代码清单: 多类型参数
// 文件名: chapter22_mergeObjects.ts
// 多类型参数
function mergeObjects<T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}

const merged = mergeObjects(
  { name: 'Alice', age: 25 },
  { email: 'alice@example.com', age: 26 } // age 会被覆盖
);
// 类型为: { name: string; age: number; email: string }
