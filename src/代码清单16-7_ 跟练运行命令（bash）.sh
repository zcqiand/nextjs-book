cd taskflow-board
npm run build
# 必须用生产构建观察缓存：dev 模式下 Data Cache 与 Full Route Cache 不启用（或行为不同），日志无法复现生产语义
npm run start
# 服务器监听 http://localhost:3000 并持续占用当前终端，以下 curl 命令请另开一个终端执行

curl -s http://localhost:3000/api/tasks
# 观察点：终端打印 [route] 收到请求。接口默认不缓存，每个请求都真实到达，这行是后续判断的信标

curl -s http://localhost:3000/tasks > /dev/null
# 观察点：两行 [task-service] 发起 fetch，随后一行 [route]。函数调用两次，网络请求只有一次

curl -s http://localhost:3000/tasks > /dev/null
# 观察点：30 秒内执行，仍有 [task-service]，但 [route] 消失了