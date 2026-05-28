// 从第 22 章提取
// 代码清单: 约束 T 必须有 length 属性
// 文件名: chapter22_getLength.ts
// 约束 T 必须有 length 属性
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength('hello');      // OK
getLength([1, 2, 3]);    // OK
getLength({ length: 5 }); // OK
getLength(123);          // Error: number 没有 length 属性

// 约束 T 必须是 K 的键
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: 'Bob', age: 30 };
getProperty(user, 'name'); // 返回 string
getProperty(user, 'age');  // 返回 number
getProperty(user, 'email'); // Error: 不存在这个键
