type ToArray<T> = T extends any ? T[] : never;

type A = ToArray<string>;        // string[]
type B = ToArray<string | number>; // string[] | number[]（分发）

// 避免分发的写法：用括号包裹
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;

type C = ToArrayNonDist<string | number>; // (string | number)[]