cd taskflow-board
npm run build
# 改动实验开关后必须重新 build 才生效
npm run start
# 服务器监听 http://localhost:3000 并占用当前终端，以下 curl 请另开终端执行

curl -s http://localhost:3000/tasks > /dev/null
# 观察点：终端出现 [task-service] 发起 fetch 与 [route] 收到请求（首次执行，结果写入组件缓存）

curl -s http://localhost:3000/tasks > /dev/null
# 观察点：两行日志一起消失（组件缓存命中，整个组件函数体没有执行）