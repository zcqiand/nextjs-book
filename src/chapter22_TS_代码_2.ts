// 从第 22 章提取
// 代码清单: TS 代码
// 文件名: chapter22_TS_代码_2.ts
type ToArray<T> = T extends any ? T[] : never;

type A = ToArray<string>;        // string[]
type B = ToArray<string | number>; // string[] | number[]（分发）

// 避免分发的写法：用括号包裹
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;

type C = ToArrayNonDist<string | number>; // (string | number)[]
