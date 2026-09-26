npm run dev
curl -I http://localhost:3000/dashboard
# 预期输出首行：HTTP/1.1 200 OK

# 加载态观测：DevTools → Network 面板限速 Slow 3G 后刷新页面，
# 左右面板应各自先出现「加载中」占位，再独立替换为正式内容