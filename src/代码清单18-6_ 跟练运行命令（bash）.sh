cd taskflow-board
npm run build
# 必须生产模式观察（理由见上方正文，此处不再展开）
npm run start
# 服务器监听 http://localhost:3000 并持续占用当前终端，以下命令请另开一个终端执行

curl -s http://localhost:3000/tasks > /dev/null
# 观察点：两行 [task-service] 系同一次调用的发起与返回，判据详见 18.4 路径①对比记录 + 一行 [route]（首次渲染，缓存条目写入并贴上 tasks 标签）

curl -s http://localhost:3000/tasks > /dev/null
# 观察点：30 秒内执行，[task-service] 在、[route] 消失（Data Cache 命中，这是失效实验的基准线）

# 路径①（改名 → revalidatePath）：浏览器打开 http://localhost:3000/tasks，
# 把 101 号「登录页适配」的输入框改成「登录页深度适配」，点「改名（revalidatePath）」按钮。
# curl 无法直接触发 Server Action（表单提交带有框架签名的加密载荷），本实验统一用浏览器按钮触发
# 观察点：终端出现 [route] 收到 PATCH（改动写入内存数组），无 [task-action] 报错

curl -s http://localhost:3000/tasks > /dev/null
# 观察点：[route] 重新出现（revalidatePath 撕掉缓存，本次请求重新取数），页面显示「登录页深度适配」。
# 要把功劳记给 revalidatePath 而不是 30 秒定时器，请确保距上一次请求不超过 30 秒

# 路径②（完成 → revalidateTag）：仍在 30 秒窗口内，把 102 号「看板拖拽排序」点「完成（revalidateTag）」按钮
# 观察点：终端出现 [route] 收到 PATCH，102 号状态写入 done

curl -s http://localhost:3000/tasks > /dev/null
# 观察点：[route] 再次重新出现（revalidateTag 打穿带 tasks 标签的缓存条目），页面显示 102 号为「已完成」