export const config = {
  // 只让管理台与登录页经过中间件：
  // /dashboard/:path* 覆盖 /dashboard 与全部子路径，/login 精确到页面本身
  matcher: ['/dashboard/:path*', '/login'],
};