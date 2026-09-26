# 1. 生产构建并启动：CWV 读数必须在生产构建下测
#    （开发模式带未压缩资源与额外检查开销，测出的分数失真）
cd taskflow-board
npm run build
npm start

# 2. 浏览器路径：DevTools 面板手动跑分
#    1) Chrome 打开 http://localhost:3000/tasks（任务列表页，本次测量对象）
#    2) F12 打开 DevTools，切换到 Lighthouse 面板
#    3) 类别只勾选 Performance，设备选 Mobile，点击 Analyze page load
#    4) 跑完后报告顶部给出 Performance 总分，展开 Metrics 区域可读到 LCP 与 CLS 的具体数值

# 3. 命令行路径（可选）：输出 HTML 报告到项目根目录
#    前提：本机装有 Chrome（lighthouse CLI 会调用它）；npx 会临时下载 CLI，首次稍慢
npx lighthouse http://localhost:3000/tasks --output html --output-path ./report.html
#    跑完用浏览器打开 report.html，同样在 Metrics 区域读数

# 4. 读数记录填写说明：
#    LCP：Metrics 里的 Largest Contentful Paint，单位秒，抄进表 27-1 的「我的读数」列
#    CLS：Metrics 里的 Cumulative Layout Shift，无量纲小数
#    INP：见下方说明，Lighthouse 报告可能不直接给出 INP 数值