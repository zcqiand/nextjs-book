// 从第 26 章提取
// 代码清单: 好：使用 Prisma ORM（自动防止 SQL 注入）
// 文件名: chapter26_使用_Prisma.ts
// 好：使用 Prisma ORM（自动防止 SQL 注入）
const user = await db.user.findUnique({
  where: { email: userInput },
});

// 好：参数化查询（如果直接使用 SQL）
const result = await db.$queryRaw`
  SELECT * FROM users WHERE email = ${userInput}
`;

// 坏：SQL 字符串拼接
const query = `SELECT * FROM users WHERE email = '${userInput}'`; // 不要这样做！
