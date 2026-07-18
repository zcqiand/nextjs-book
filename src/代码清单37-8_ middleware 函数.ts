export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // 根据 subdomain 重写到对应页面
  if (hostname.startsWith('shop.')) {
    return NextResponse.rewrite(
      new URL(`/shop${request.nextUrl.pathname}`, request.url)
    );
  }

  if (hostname.startsWith('blog.')) {
    return NextResponse.rewrite(
      new URL(`/blog${request.nextUrl.pathname}`, request.url)
    );
  }

  return NextResponse.next();
}