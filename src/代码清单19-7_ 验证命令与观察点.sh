# 启动开发服务器
npm run dev

# 观察 1：路由处理器只返回 todo 状态的任务
curl 'http://localhost:3000/api/tasks?status=todo'
# 预期输出（节选）：
# [{"id":"t-003","title":"编写筛选器组件","status":"todo","assigneeId":"m-001"},
#  {"id":"t-004","title":"接入成员数据","status":"todo","assigneeId":"m-003"}]

# 观察 2：非法参数应得到 400，而不是一列空数据
curl -i 'http://localhost:3000/api/tasks?status=archived'
# 预期输出（节选）：HTTP/1.1 400 Bad Request

# 观察 3：浏览器访问 http://localhost:3000/tasks
# a. 查看页面源码：任务标题直接出现在 HTML 里，证明列表来自服务端渲染期取数
# b. 打开 Network 面板并切换筛选下拉框：每次切换出现一条对 /api/tasks 的新请求，
#    证明筛选器走的是客户端取数
# c. 回到开发服务器终端：每次整页渲染后打印一条 after() 注册的取数耗时日志