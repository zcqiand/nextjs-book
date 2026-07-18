type World = 'world';
type Greeting = `hello ${World}`; // "hello world"

// 组合多个类型
type Email = `${string}@${string}.${string}`;
type Padding = 'top' | 'bottom' | 'left' | 'right';
type CssProperty = `margin-${Padding}`;
// "margin-top" | "margin-bottom" | "margin-left" | "margin-right"