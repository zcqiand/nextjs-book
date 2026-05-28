// 从第 26 章提取
// 代码清单: 错误：记录敏感信息
// 文件名: chapter26_错误_记录敏感信息.ts
// 错误：记录敏感信息
console.log('Login attempt:', { email, password });

// 正确：只记录非敏感信息
console.log('Login attempt:', { email, timestamp: new Date() });
