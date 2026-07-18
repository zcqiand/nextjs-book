export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // 规范化尾斜杠
  if (pathname.endsWith('/') && pathname !== '/') {
    const newUrl = new URL(pathname.slice(0, -1) + searchParams.toString(), request.url);
    return NextResponse.redirect(newUrl);
  }

  // 规范化 query 参数顺序
  if (searchParams.toString()) {
    const sortedParams = new URLSearchParams(
      Array.from(searchParams.entries()).sort()
    );
    if (sortedParams.toString() !== searchParams.toString()) {
      return NextResponse.redirect(
        new URL(`${pathname}?${sortedParams}`, request.url)
      );
    }
  }

  return NextResponse.next();
}