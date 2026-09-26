cd taskflow-board
# 进入示例项目目录
npm run dev
# Next.js（约定）开发模式；浏览器打开 http://localhost:3000/tasks：骨架屏先现，约 1.5s 任务列表出现（动态流局部骨架同时出现），约 4s 动态流补齐
curl -s http://localhost:3000/tasks | head -c 400
# 初始 HTML 里已含 fallback 骨架标记：shell 先行返回，慢数据随后流式补齐（截至 Next.js 15.x 的流式 SSR 行为）