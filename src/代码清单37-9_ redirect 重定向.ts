export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'US';
  const pathname = request.nextUrl.pathname;

  // 某些国家重定向到特定页面
  if (country === 'CN' && pathname === '/') {
    return NextResponse.redirect(
      new URL('/cn', request.url)
    );
  }

  return NextResponse.next();
}