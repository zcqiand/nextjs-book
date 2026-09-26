# 1. POST 创建评论（JSON 请求体），-i 让响应首行可见
curl -i -X POST http://localhost:3000/api/comments -H "Content-Type: application/json" -d '{"taskId":"101","author":"陈脚本","content":"curl 也能发评论"}'
# 预期：首行 HTTP/1.1 201 Created，响应体 {"success":true}

# 2. GET 回读该任务的评论列表
curl "http://localhost:3000/api/comments?taskId=101"
# 预期：评论数组 JSON，第 1 步写入的评论排在最前

# 3. POST 缺 author 字段，验证服务端校验兜底
curl -i -X POST http://localhost:3000/api/comments -H "Content-Type: application/json" -d '{"taskId":"101","content":"缺署名"}'
# 预期：首行 HTTP/1.1 400 Bad Request，响应体 {"success":false,"error":"署名至少 2 个字符"}