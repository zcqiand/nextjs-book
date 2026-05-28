// 从第 22 章提取
// 代码清单: 将所有属性值变为指定类型
// 文件名: chapter22_将所有属性值变为指定类型.ts
// 将所有属性值变为指定类型
type Stringify<T> = {
  [K in keyof T]: string;
};

type User = { id: number; name: string; age: number };
type StringifiedUser = Stringify<User>;
// { id: string; name: string; age: string }
