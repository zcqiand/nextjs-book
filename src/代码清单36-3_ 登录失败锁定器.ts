const WINDOW_MS_DEFAULT = 15 * 60 * 1000;
const COOLDOWN_MS_DEFAULT = 30 * 60 * 1000;
const MAX_FAILS_DEFAULT = 5;

function readMax(): number {
  const raw = process.env.LOCKOUT_MAX_FAILS;
  const n = raw ? Number(raw) : MAX_FAILS_DEFAULT;
  return Number.isFinite(n) && n > 0 ? n : MAX_FAILS_DEFAULT;
}

function readWindowMs(): number {
  const raw = process.env.LOCKOUT_WINDOW_MIN;
  const min = raw ? Number(raw) : 15;
  return Number.isFinite(min) && min > 0 ? min * 60 * 1000 : WINDOW_MS_DEFAULT;
}

function readCooldownMs(): number {
  const raw = process.env.LOCKOUT_COOLDOWN_MIN;
  const min = raw ? Number(raw) : 30;
  return Number.isFinite(min) && min > 0 ? min * 60 * 1000 : COOLDOWN_MS_DEFAULT;
}

class LoginLockout {
  private fails = new Map<string, FailRecord>();

  /** 当前是否锁定：count >= max 且 lastAt 在 cooldown 内 */
  isLockedOut(key: string, now: number = Date.now()): boolean {
    const rec = this.fails.get(key);
    if (!rec) return false;
    const windowMs = readWindowMs();
    const cooldownMs = readCooldownMs();
    // 窗口外：失效，重置
    if (now - rec.firstAt > windowMs) {
      this.fails.delete(key);
      return false;
    }
    if (rec.count < readMax()) return false;
    return now - rec.lastAt <= cooldownMs;
  }

  /** 记录一次失败；窗口起点不滑动（与 msw handler-extra.ts 略不同 — nextjs 用「首次失败后 LOCKOUT_WINDOW_MIN 累计 N 次」） */
  recordFailure(key: string, now: number = Date.now()): void {
    const windowMs = readWindowMs();
    const rec = this.fails.get(key);
    if (!rec || now - rec.firstAt > windowMs) {
      this.fails.set(key, { count: 1, firstAt: now, lastAt: now });
      return;
    }
    rec.count += 1;
    rec.lastAt = now;
  }

  // ... clearFailures：登录成功后清零
}

export const loginLockout =
  (globalThis as { __loginLockout?: LoginLockout }).__loginLockout ?? new LoginLockout();
if (!(globalThis as { __loginLockout?: LoginLockout }).__loginLockout) {
  (globalThis as { __loginLockout?: LoginLockout }).__loginLockout = loginLockout;
}