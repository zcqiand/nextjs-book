import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // 存在性检查：只判断有没有带回有效值的 session Cookie，
  // 是否真的有效由服务端会话体系负责，中间件只挡明显未登录的请求
  const session = request.cookies.get('session')?.value;

  // 已登录还停在登录页，说明刚登录完，送回管理台避免二次登录
  if (pathname === '/login' && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // 守卫条件里带上 pathname !== '/login'：登录页自身必须放行，
  // 否则未登录访问 /login 会被再次重定向回 /login，陷入死循环
  // 用 URL 对象的 searchParams.set 拼查询参数，
  // 自动完成百分号编码，比手工字符串拼接可靠
  if (!session && pathname !== '/login') {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 放行路径统一注入安全头：
  // X-Frame-Options 禁止被 iframe 嵌套防点击劫持；
  // X-Content-Type-Options 禁止浏览器猜 MIME 类型防嗅探攻击
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  return response;
}