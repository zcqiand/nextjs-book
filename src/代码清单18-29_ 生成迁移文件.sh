# 生成迁移文件
npx prisma migrate dev --name add_posts_table

# 生产环境应用迁移（不会重置数据）
npx prisma migrate deploy