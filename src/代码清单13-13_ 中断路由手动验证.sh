# 启动开发服务器
npm run dev

# 软导航验证（拦截生效 → 模态）：
#   1. 浏览器打开 http://localhost:3000/tasks
#   2. 点击任意任务卡 → URL 变为 /tasks/101，模态浮在列表上方，列表内容仍在页面里
#   3. 点击「关闭」（或遮罩空白处） → 回退到 /tasks，模态消失

# 硬导航验证（拦截不触发 → 完整详情页）：
#   4. 在模态打开时按 F5 刷新，或把 /tasks/101 粘贴到新标签页直接打开
#      → 不出现模态，渲染的是 tasks/[taskId]/page.tsx 的完整详情页

# 再用 curl 确认硬导航返回 200：
curl -I http://localhost:3000/tasks/101
# 预期输出首行：HTTP/1.1 200 OK