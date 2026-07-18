// 续 32-3，已登录分支里加：
const requestHeaders = new Headers(req.headers);
requestHeaders.set("x-robots-tag", "noindex, nofollow");
const response = NextResponse.next({
  request: { headers: requestHeaders },
});
response.headers.set("x-robots-tag", "noindex, nofollow");
return response;