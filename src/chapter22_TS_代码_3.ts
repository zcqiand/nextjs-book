// 从第 22 章提取
// 代码清单: TS 代码
// 文件名: chapter22_TS_代码_3.ts
type OptionsFlags<T> = {
  [K in keyof T]: boolean;
};

type FeatureFlags = {
  darkMode: string;
  notifications: string;
  autoSave: string;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
// { darkMode: boolean; notifications: boolean; autoSave: boolean }
