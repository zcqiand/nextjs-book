// 从第 22 章提取
// 代码清单: 基于属性值类型进行映射
// 文件名: chapter22_基于属性值类型进行映射.ts
// 基于属性值类型进行映射
type FilterBoolean<T> = {
  [K in keyof T]: T[K] extends boolean ? K : never;
}[keyof T];

type User = { id: number; isActive: boolean; name: string; isAdmin: boolean };
type BooleanKeys = FilterBoolean<User>; // "isActive" | "isAdmin"
