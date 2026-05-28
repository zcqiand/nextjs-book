// 从第 22 章提取
// 代码清单: 使用 as 断言
// 文件名: chapter22_assertIsDefined.ts
// 使用 as 断言
function assertIsDefined<T>(
  value: T | null | undefined,
  message: string
): asserts value is T {
  if (value === null || value === undefined) {
    throw new Error(message);
  }
}

function greet(name: string | undefined) {
  assertIsDefined(name, 'Name is required');
  // 这里 name 被收窄为 string，不再是 undefined
  console.log(`Hello, ${name.toUpperCase()}`);
}
