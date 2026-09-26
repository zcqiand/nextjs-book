# 1. 安装依赖并启动开发服务器
npm install
npm run dev

# 2. 验证前台工作台与登录页的 URL 都不带路由组前缀
curl -I http://localhost:3000/boards
curl -I http://localhost:3000/login