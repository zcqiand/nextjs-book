// 将所有属性值变为指定类型
type Stringify<T> = {
  [K in keyof T]: string;
};

type User = { id: number; name: string; age: number };
type StringifiedUser = Stringify<User>;
// { id: string; name: string; age: string }