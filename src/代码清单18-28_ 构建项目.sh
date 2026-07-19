# 完整构建流程
npm install          # 安装依赖
npx prisma generate  # 生成 Prisma Client
npx prisma db push   # 同步数据库结构（开发环境）
npm run build        # 执行构建
npm run start        # 本地测试生产构建