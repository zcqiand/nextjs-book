function processValue(value: string | number | Date) {
  if (value instanceof Date) {
    value.getFullYear(); // value 是 Date 类型
  } else if (typeof value === 'string') {
    value.toUpperCase(); // value 是 string 类型
  } else {
    value.toFixed(2); // value 是 number 类型
  }
}