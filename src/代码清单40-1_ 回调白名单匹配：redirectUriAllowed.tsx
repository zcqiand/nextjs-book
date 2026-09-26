/**
 * redirect 白名单匹配（aspnetcore OAuthController.cs 同款语义）：
 * DB 列 redirect_uris 是 csv 文本；匹配 = 精确相等，或白名单条目是请求的
 * 前缀且边界落在 '?'（RFC 6749 §3.1.2 允许 query 参数差异，lab 前端回跳带
 * ?from=<业务路径>）。子路径（'/call' vs '/callback'）不算匹配。
 */
function redirectUriAllowed(csv: string, requested: string): boolean {
  return csv
    .split(",")
    .map((u) => u.trim())
    .filter(Boolean)
    .some(
      (u) => requested === u || (requested.startsWith(u) && requested.charAt(u.length) === "?"),
    );
}