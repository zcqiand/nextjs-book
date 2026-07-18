# 1. 确保所有测试通过
npm test

# 2. 确保构建成功
npm run build

# 3. 确保环境变量已配置
# 检查 Vercel 控制台中的 Environment Variables

# 4. 确保数据库迁移已执行
npx prisma migrate deploy

# 5. 本地测试生产构建
npm run start