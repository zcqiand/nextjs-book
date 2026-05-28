// 从第 22 章提取
// 代码清单: Exclude<T, U> - 从 T 中排除可以赋值给 U 的类型
// 文件名: chapter22_getUser.ts
// Exclude<T, U> - 从 T 中排除可以赋值给 U 的类型
type A = Exclude<string | number | boolean, string>; // number | boolean

// Extract<T, U> - 从 T 中提取可以赋值给 U 的类型
type B = Extract<string | number | boolean, string>; // string

// NonNullable<T> - 去除 null 和 undefined
type C = NonNullable<string | null | undefined>; // string

// ReturnType<T> - 获取函数返回值类型
function getUser() { return { name: 'Alice', age: 25 }; }
type User = ReturnType<typeof getUser>; // { name: string; age: number }

// Parameters<T> - 获取函数参数类型
function setUser(name: string, age: number) {}
type Params = Parameters<typeof setUser>; // [name: string, age: number]
