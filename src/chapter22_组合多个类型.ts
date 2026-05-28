// 从第 22 章提取
// 代码清单: 组合多个类型
// 文件名: chapter22_组合多个类型.ts
type World = 'world';
type Greeting = `hello ${World}`; // "hello world"

// 组合多个类型
type Email = `${string}@${string}.${string}`;
type Padding = 'top' | 'bottom' | 'left' | 'right';
type CssProperty = `margin-${Padding}`;
// "margin-top" | "margin-bottom" | "margin-left" | "margin-right"
