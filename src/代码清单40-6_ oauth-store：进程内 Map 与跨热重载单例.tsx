class OAuthStore {
  private codes = new Map<string, CodeEntry>();
  private refreshTokens = new Map<string, RefreshEntry>();

  putCode(code: string, e: Omit<CodeEntry, "createdAt">): void {
    this.codes.set(code, { ...e, createdAt: Date.now() });
  }

  consumeCode(code: string): CodeEntry | undefined {
    this.evictCodes();
    const e = this.codes.get(code);
    if (e) this.codes.delete(code);
    return e;
  }

// ………（省略：putRefresh/rotateRefresh 与两个私有过期清理方法及类收尾，调用侧见清单 40-4/40-5，见仓库原文 65-85 行）………

// Module-scope singleton（同一进程内共享；Next.js dev hot-reload 下 reset 行为参见 next dev 文档）
// 2026-09-01 contract-test I24/I27：长跑 dev 模式下 module 重新求值会重置实例，
// oauthStore 里的 refresh/code 全丢，I24/I27 在全量套件里报 INVALID_GRANT。
// 用 globalThis 缓存使实例跨越 module 重求值存活（Next.js 官方推荐模式）。
const _oauthStore = (globalThis as { __oauthStore?: OAuthStore }).__oauthStore;
export const oauthStore: OAuthStore = _oauthStore ?? new OAuthStore();
if (!_oauthStore) {
  (globalThis as { __oauthStore?: OAuthStore }).__oauthStore = oauthStore;
}