type IsString<T> = T extends string ? 'yes' : 'no';

type A = IsString<string>;  // 'yes'
type B = IsString<number>;  // 'no'

// 在泛型中使用
type Unwrap<T> = T extends Promise<infer U> ? U : T;

type A = Unwrap<Promise<string>>; // string
type B = Unwrap<number>;           // number

// 数组元素类型
type ElementOf<T> = T extends Array<infer U> ? U : never;

type A = ElementOf<string[]>;  // string
type B = ElementOf<number[]>;   // number
type C = ElementOf<boolean>;    // never