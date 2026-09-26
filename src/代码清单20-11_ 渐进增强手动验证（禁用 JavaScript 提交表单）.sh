# 前置：开发服务器已在运行，并按清单 20-10 确认 JS 正常开启时可以提交评论
# 每步格式「做什么 → 预期看到什么」：
#
#   1. 打开 http://localhost:3000/tasks/101，按 F12 打开 DevTools
#      → 预期：DevTools 面板展开
#   2. 按 Ctrl+Shift+P 打开命令面板，输入 javascript，选择「Debugger - Disable JavaScript」
#      → 预期：DevTools 顶部出现黄色警示条，提示 JavaScript 已被禁用
#   3. 切到 Network 面板、过滤器选 Doc，刷新页面后填写署名与评论内容，点击「提交评论」
#      → 预期：页面走传统整页提交，Network 面板出现一条 Doc 类型的 POST 请求，
#        页面随之整体刷新
#   4. 查看刷新后页面的评论区
#      → 预期：刚提交的评论出现在列表中，说明 JavaScript 被禁用时写入依然成功
#   5. 记录证据：对 Network 面板的 Doc 请求截图，或保存该请求的 Headers 信息
#   6. 回到命令面板执行「Debugger - Enable JavaScript」，再刷新一次页面
#      → 预期：评论仍在列表中；数据存于服务端进程内存，页面刷新不影响，
#        仅重启 npm run dev 才会清空