// 从第 22 章提取
// 代码清单: processValue 函数
// 文件名: chapter22_processValue.ts
function processValue(value: string | number | Date) {
  if (value instanceof Date) {
    value.getFullYear(); // value 是 Date 类型
  } else if (typeof value === 'string') {
    value.toUpperCase(); // value 是 string 类型
  } else {
    value.toFixed(2); // value 是 number 类型
  }
}
