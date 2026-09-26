// app/api/health/route.ts
// Next.js 15 口径：GET 处理器默认不缓存，每个请求都会真实执行函数体。
// Next 14 里 GET 默认缓存；若处理器没用到 cookies/headers 等动态 API（那本身已属动态渲染），需要 dynamic = 'force-dynamic' 才强制退出静态；迁移时这是最易踩的默认值变化
export async function GET() {
  // 这行日志每次请求都出现，正是「默认不缓存」的直接证据
  console.log('[health] 收到请求');
  return Response.json({ ok: true });
}