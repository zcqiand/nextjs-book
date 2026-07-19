// 错误：记录敏感信息
console.log('Login attempt:', { email, password });

// 正确：只记录非敏感信息
console.log('Login attempt:', { email, timestamp: new Date() });