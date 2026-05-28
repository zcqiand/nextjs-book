// 从第 22 章提取
// 代码清单: 全部变为只读
// 文件名: chapter22_全部变为只读.ts
// 全部变为只读
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

// 全部变为可选
type Partial<T> = {
  [K in keyof T]?: T[K];
};

// 全部变为必需
type Required<T> = {
  [K in keyof T]-?: T[K];
};

// 移除 readonly
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};
